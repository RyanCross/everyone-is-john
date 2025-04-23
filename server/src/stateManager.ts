


/**
 * A mechanism to prevent simultaneous state modification
 */

import { setTimeout } from "timers/promises"
export interface Lockable<T> {
    locked: boolean
    state: T
}


function unlock<T>(obj: Lockable<T>) {
    obj.locked = false
    console.log("Object unlocked")
}

function lock<T>(obj: Lockable<T>) {
    obj.locked = true
    console.log("Object locked")
}
/**
 * Attempt to execute the function if unlocked.
 */
async function runLocked<T>(obj: Lockable<T>, fn: any, waitTime: number) {
    console.log("starting runLocked")
    // if locked, begin retry loop
    if (obj.locked) {
        console.log(`object is locked, retrying in ${waitTime}`)
        return retry(runLocked, waitTime, obj, fn)
    }
    else {
        console.log("Object unlocked, locking and executing...")
        // else lock and execute
        // slow things down to test
        lock(obj)
        await setTimeout(20000)
        fn(obj)
        unlock(obj)
    }
}

async function retry(runLocked, waitTime, lockedObj, fn) {
    // set timeout and run lock execute function again, if still locked, we'll be back here with more wait time.
    await setTimeout(waitTime)
    waitTime += 1000
    return runLocked(lockedObj, fn, waitTime)
}

export const stateManager = {
    unlock: unlock,
    lock: lock,
    runLocked: runLocked
}



