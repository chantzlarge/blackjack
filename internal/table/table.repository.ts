import Player from '../player/player'
import Table from './table'

export default class TableRepository {
  tables: Table[] = []

  DeleteTable (id: string): void {
    this.tables = this.tables.filter(t => t.id !== id)
  }

  InsertTable (table: Table): number {
    return this.tables.push(table)
  }

  SelectTableByCode (code: string): Table {
    const table = this.tables.find(t => t.code === code)

    if (table == null) {
      throw new Error('table not found')
    }

    return table
  }

  SelectTableById (id: string): Table {
    const table = this.tables.find(t => t.id === id)

    if (table == null) {
      throw new Error('table not found')
    }

    return table
  }

  UpdateTable (table: Table): void {
    this.tables = this.tables.map(t => t.id === table.id ? table : t)
  }
}
