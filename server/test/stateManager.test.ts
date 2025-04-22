import * as assert from "node:assert"
import { stateManager } from "../src/stateManager.js"
import { setTimeout } from "timers/promises"

async function testRunAndLock() {

    async function testFn(game) {
        console.log("test function called")
        // why would I call await
        setTimeout(1000)
        game.id += 1
    }
    let game = {
        id: 1,
    }

    let lockable = {
        locked: false,
        state: game
    }


    const promises = [
        stateManager.runLocked(lockable, testFn, 1),
        stateManager.runLocked(lockable, testFn, 1)
    ]

    await Promise.all(promises)
}
testRunAndLock();