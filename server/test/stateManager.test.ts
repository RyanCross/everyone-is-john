import * as assert from "node:assert"
import { stateManager } from "../src/stateManager.ts"
import { setTimeout } from "timers/promises"


async function testRunAndLock() {

    async function testFn(game) {
        console.log("test function called")
        await setTimeout(1000)
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

    stateManager.runLocked(lockable, testFn, 1)
    stateManager.runLocked(lockable, testFn, 1)


    // game Id should equal 3,
    await setTimeout(10000, () => { assert.equal(game.id, 3) }, )
}

await testRunAndLock();