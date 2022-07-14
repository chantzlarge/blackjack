import Player from 'player'
import Table from './table'

export default class TableRepository {
  tables: Table[] = []

  DeleteTable (id: string) {
    this.tables = this.tables.filter(t => t.Id !== id)
  }

  InsertTable (table: Table) {
    this.tables.push(table)
  }

  SelectPlayerBySessionId (sessionId: string): Player | undefined {
    return this.tables
      .map(t => t.Players)
      .reduce((p, c) => [...p, ...c], [])
      .find(p => p.SessionId === sessionId)
  }

  SelectTableById (id: string): Table | undefined {
    return this.tables.find(t => t.Id === id)
  }

  SelectTableBySessionId (sessionId: string): Table | undefined {
    return this.tables.find(t => t.Players.find(p => p.SessionId === sessionId))
  }

  UpdateTable (table: Table) {
    this.tables = this.tables.map(t => t.Id === table.Id ? table : t)
  }
}
