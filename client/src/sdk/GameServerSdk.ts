
/**
 * Create a new game or update an existing one with a new player
 */

export const sdk = {
    connectToGameInstance: connectToGameInstance
}

async function connectToGameInstance(instanceId: string): Promise<void> {
    const url = `http://localhost:8080/api/game/${instanceId}/`
    let promise = new Promise((resolve, reject) => {
        fetch(url)
            .then((result) => resolve(result))
            .catch((error) => reject(error))
    });
}