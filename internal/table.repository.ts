import Player from 'player'
import Table from './table'

export default class TableRepository {
  tables: Table[] = []

  DeletePlayer(playerId: string) {
    this.tables = this.tables.map(t => {
      t.Players = t.Players.filter(p => p.Id !== playerId)

      return t
    })
  }

  DeleteTable(id: string) {
    this.tables = this.tables.filter(t => t.Id !== id)
  }

  InsertTable(table: Table) {
    this.tables.push(table)
  }

  SelectPlayerBySessionId(sessionId: string): Player | undefined {
    return this.tables
      .map(t => t.Players)
      .reduce((p, c) => [...p, ...c], [])
      .find(p => p.SessionId === sessionId)
  }

  SelectTableById(id: string): Table | undefined {
    return this.tables.find(t => t.Id === id)
  }

  SelectTableBySessionId(sessionId: string): Table | undefined {
    return this.tables.find(t => t.Players.find(p => p.SessionId === sessionId))
  }

  UpdatePlayer(player: Player) {
    this.tables = this.tables.map(t => {
      t.Players = t.Players.map(p => p.Id === player.Id ? player : p)
      
      return t
    })
  }

  UpdateTable(table: Table) {
    this.tables = this.tables.map(t => t.Id === table.Id ? table : t)
  }
}
