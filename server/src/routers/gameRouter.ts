import express from "express"
import { gameState } from "../server.js"

/**
 * Router to modularize any specific middleware for game routes
 * mounted on the app in server.js as /game, so all routes here are prefixed with /game
 */
export const gameRouter = express.Router()

gameRouter.post("/roll", (req, res, next) => {
    console.log("Roll Request")
    const roll = req.body.roll
    const player = req.body.player

    // add to game log
    gameState.log.add(`${player} rolled a ${roll}`)

    res.send()
})

gameRouter.get('/', (req, res, next) => {
    console.log("Request for game state")
    res.send(gameState)
})
