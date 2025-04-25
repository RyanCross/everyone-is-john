import { EventEmitter } from "stream"

export interface Player {
    id: string
    username: string
    avatarSrc?: string
    session?: SessionSheet
}

export interface SessionSheet {
    willpower: number
    skills: string[]
    obsessions: string[]
}

export interface Bid {
    numPlayers: number
    submittedBids: string
    status: "open" | "closed"
}

export interface Game {
    gm: Player
    players: Player[] 
    activeBid: Bid | null
}

export interface GameInstance {
    emitter: EventEmitter
    game: Game
}

