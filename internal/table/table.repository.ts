import Player from '../player/player'
import Table from './table'

export default class TableRepository {
  tables: Table[] = []

  DeleteTable(id: string): Promise<void> {
    return new Promise((resolve) => {
      this.tables = this.tables.filter(t => t.Id !== id)

      resolve()
    })
  }

  InsertTable(table: Table): Promise<number> {
    return new Promise((resolve) => {
      const i = this.tables.push(table)

      resolve(i)
    })
  }

  SelectTableById(id: string): Promise<Table> {
    return new Promise((resolve, reject) => {
      const table = this.tables.find(t => t.Id === id)

      if (table != null) {
        resolve(table)
      }

      reject('table not found')
    })
  }

  UpdateTable(table: Table): Promise<void> {
    return new Promise((resolve) => {
      this.tables = this.tables.map(t => t.Id === table.Id ? table : t)

      resolve()
    })
  }
}
