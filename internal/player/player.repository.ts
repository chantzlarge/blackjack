import Player from "./player";

export default class PlayerRepository {
    players: Player[] = []

    DeletePlayer(id: string) {
        this.players = this.players.filter(p => p.Id === id)
    }

    GetPlayerById(id: string): Player | undefined {
        return this.players.find(p => p.Id === id)
    }

    GetPlayerBySessionId(sessionId: string): Player | undefined {
        return this.players.find(p => p.SessionId === sessionId)
    }

    InsertPlayer(player: Player) {
        this.players.push(player)
    }
}
