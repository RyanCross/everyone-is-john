import { Game, Player } from "../types/index.js"

export const mockProvider = {
    newGame: newGame
}

function newGame(): [string, Game] {
    let players : Player[] = []
    const instanceId = "1"
    let game : Game = {
        gm: {id: "100", username: "Fildop"},
        players: players,
        activeBid: null
    }
    

    // create 4 player objects
    for (let i = 0; i <= 3; i++) {
        players.push({
            id: i.toString(),
            username: `Player${i}`,
            session: {
                willpower: i,
                skills: ["skill 1", "skill 2", "skill 3"],
                obsessions: ["Eat a chicken", "Jump off a building in a hamster ball"]
            }
        })
    }

    return [instanceId, game]
}