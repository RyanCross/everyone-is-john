import express, { } from "express"
import { body, validationResult } from "express-validator";
import { Request, Response } from "express";
import { games } from "../server.js";
import { initGameState } from "../game.js";
import { mockProvider } from "../mocks/mocksProvider.js";
import EventEmitter from "node:events";
import { GameInstance } from "../types/index.js";

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

gameRouter.get("/:instanceId", async (req: Request, res: Response) => {
  // Temp allowance for CORS bypass
  res.setHeader("Clear-Site-Data", "*")
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
  res.setHeader("Access-Control-Allow-Methods", "*")
  res.setHeader("Access-Control-Allow-Headers", "*")

  const instanceId = req.params.instanceId

  // what is the request body going to look like?
  const newPlayer = req.body.newPlayer

  // if game does not exist for the activity instance in server memory, create one
  const instance = games.get(instanceId)
  if (instance.game) {
    instance.game.players.push(newPlayer)
  } else {
    const [instanceId, newGame] = mockProvider.newGame()
    const eventEmitter = new EventEmitter()
    const gameInstance: GameInstance = {
      emitter: eventEmitter,
      game: newGame
    }
    games.set(instanceId, gameInstance)
  }

  instance.emitter.emit('event')
  res.send(200)
})


gameRouter.get("/:instanceId/updates", async (req: Request, res: Response) => {
  const instanceId = req.params.instanceId
  const gameInstance = games.get(req.params.instanceId)

  // Temp allowance for CORS bypass
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
  res.setHeader("Access-Control-Allow-Methods", "*")
  res.setHeader("Access-Control-Allow-Headers", "*")

  res.setHeader("Content-Type", "text/event-stream")
  res.setHeader("Cache-Control", "no cache")
  res.setHeader("Connection", "keep-alive")
  // res.flushHeaders() // res.write might not send right away (buffering), force it to, actually needed?

  // send data when game object changes by other state changing requests
  gameInstance.emitter.on('event', () => {
    res.write(`data: ${JSON.stringify(gameInstance.game)}\n\n`) // double newline required for format for some reason
  })
});
