import express from "express"
import { gameState } from "../server.js"
import { body, validationResult } from "express-validator";

/**
 * Router to modularize any specific middleware for game routes
 * mounted on the app in server.js as /game, so all routes here are prefixed with /game
 */
export const gameRouter = express.Router()

gameRouter.post("/roll",
    body('roll').notEmpty().isNumeric().escape(),
    body('player').notEmpty().isAlphanumeric().escape(),
    (req, res) => {
        const errors = validationResult(req)

        if(errors.isEmpty()) {
            const roll = req.body.roll
            const player = req.body.player
    
            // add to game log
            gameState.log.add(`${player} rolled a ${roll}`)
            res.send() 
            return
        }

        res.status(400).send(errors)
    })

gameRouter.get('/', (req, res, next) => {
    res.send(gameState)
})
