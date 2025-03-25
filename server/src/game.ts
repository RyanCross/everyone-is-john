/**
 * Logs actions taken during a game
 */
class GameLog {
    entries
    constructor() {
        this.entries = []   
    }

    clear() {
        this.entries = []
    }

    add(entry) {
        this.entries.push(entry)
    }
}

/**
 * Initialize the game object the server will maintain and push to clients
 */
export function initGameState(newPlayer: any) {
    const game = {log: null, players: [newPlayer]}
    game.log = new GameLog()
    console.log("Game state initialized")
    return game
}