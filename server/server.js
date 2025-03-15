import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import { initGameState } from "./game.js";
import { gameRouter } from "./routers/gameRouter.js";
dotenv.config({ path: "../.env" });

const app = express();
const port = 3001;

// Allow express to parse JSON bodies
app.use(express.json());

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

app.use('/game', gameRouter)

// Right now initialize the game on server startup
export const gameState = initGameState();

app.get('/user/:id', (req, res, next) => {
  // if the user ID is 0, skip to the next route
  //if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  next()
}, (req, res, next) => {
  // send a regular response
  res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', (req, res, next) => {
  res.send('special')
})


/**
 * Roll API 
 * triggered by user roll action on client
 * appends roll to log
 */

app.post("/api/token", async (req, res) => {
  
  // Exchange the code for an access_token
  const response = await fetch(`https://discord.com/api/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: process.env.VITE_DISCORD_CLIENT_ID,
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      grant_type: "authorization_code",
      code: req.body.code,
    }),
  });

  // Retrieve the access_token from the response
  const { access_token } = await response.json();

  // Return the access_token to our client as { access_token: "..."}
  res.send({access_token});
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
