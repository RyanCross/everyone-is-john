import * as assert from "node:assert"
import { stateManager } from "../src/stateManager.js"
import { setTimeout } from "timers/promises"
import { promiseHooks } from "node:v8"


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

    // how do we ensure both of these non-blocking methods are done by the time an assert runs
    // assert is happening right away
    // await means 
    const promises = [
        stateManager.runLocked(lockable, testFn, 1),
        stateManager.runLocked(lockable, testFn, 1)
    ]
}

testRunAndLock();