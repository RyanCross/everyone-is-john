import express, { } from "express"
import { body, validationResult } from "express-validator";
import { Request, Response } from "express";
import { games } from "../server.js";
import { initGameState } from "../game.js";

/**
 * Router to modularize any specific middleware for game routes
 * mounted on the app in server.js as /game, so all routes here are prefixed with /game
 */
export const gameRouter = express.Router({ mergeParams: true })

gameRouter.post("/roll",
  body('roll').notEmpty().isNumeric().escape(),
  body('player').notEmpty().isAlphanumeric().escape(),
  (req, res) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
      const roll = req.body.roll
      const player = req.body.player

      // add to game log
      //TODO this needs to be set up to get game
      //  gameState.log.add(`${player} rolled a ${roll}`)
      res.send()
      return
    }

    res.status(400).send(errors)
  })

gameRouter.post("/:instanceId", async (req: Request, res: Response) => {
  const instanceId = req.params.instanceId

  // what is the request body going to look like?
  const newPlayer = req.body.newPlayer

  // if game does not exist for the activity instance in server memory, create one
  const game = games.get(instanceId)
  if (game) {
    game.players.push()
  } else {
    let newGame = initGameState(newPlayer)
    games.set(instanceId, newGame)

  }

  // how are we going to push this update? HTTP response. server sent events.
})


gameRouter.get("/:instanceId/updates", async (req: Request, res: Response) => {
  console.log("route reached")
  // accept input param
  //const instanceId = req.params.instanceId
  // retrieve the game state,

  // how does the server enqueue messages to be sent?  "e.g. how do we invoke the event server side"
  // trigger a change

  // make a function that gets current game state
  //const game = games.get(instanceId)

  // Temp allowance for CORS bypass
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
  res.setHeader("Access-Control-Allow-Methods", "*")
  res.setHeader("Access-Control-Allow-Headers", "*")

  res.setHeader("Content-Type", "text/event-stream")
  res.setHeader("Cache-Control", "no cache")
  res.setHeader("Connection", "keep-alive")
 // res.flushHeaders() // res.write might not send right away (buffering), force it to, actually needed?
  // set the encoding
  // res.setDefaultEncoding("utf8")
  // define some data
  setInterval(() => {
    console.log("sending interval data")
    res.write(`data: ${Math.random()}\n\n`) // double newline required for format for some reason
  }, 1000)
});
