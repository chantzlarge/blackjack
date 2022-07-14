import Player from "./player";

export default class PlayerRepository {
    players: Player[] = []

    DeletePlayer(id: string) {
        this.players = this.players.filter(p => p.Id !== id)
    }

    InsertPlayer(player: Player): number {
        return this.players.push(player)
    }

    SelectPlayerById(id: string): Player | undefined {
        return this.players.find(p => p.Id === id)
    }

    SelectPlayerBySessionId(sessionId: string): Player | undefined {
        return this.players.find(p => p.SessionId === sessionId)
    }

    SelectPlayerByTableId(tableId: string): Player | undefined {
        return this.players.find(p => p.TableId === tableId)
    }


    UpdatePlayer(player: Player) {
        this.players = this.players.map(p => p.Id === player.Id ? player : p)
    }
}