
/**
 * Create a new game or update an existing one with a new player
 */

export const sdk = {
    subscribeToGameUpdates: subscribeToGameUpdates
}
function save(instanceId: string, player: any) {
    // create a HTTP POST request to /.proxy/game/instanceId
}


async function subscribeToGameUpdates(instanceId: string): Promise<void> {
    const url = `http://localhost:8080/api/game/1/updates`
    let promise = new Promise((resolve, reject) => {
        fetch(url)
            .then((result) => resolve(result))
            .catch((error) => reject(error))
    });


    // fetch promse is resolving
    return await promise.then((response) => {
        // // return event source
        // const gameEvents : EventSource = new EventSource(url)
        // return gameEvents

    }).catch((reason: Error) => {
        // some error handling, maybe retrying connection
        throw new Error(reason.message)
    })
}