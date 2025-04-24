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

