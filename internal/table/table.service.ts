import Table from './table'
import TableRepository from './table.repository'

export default class TableService {
  tableRepository: TableRepository

  constructor(tableRepository: TableRepository) {
    this.tableRepository = tableRepository
  }

  AddPlayer(sessionId: string) {
    // TBD
  }

  GetPlayer(id: string) {
    // TBD
  }

  CloseTable() {
    // TBD
  }

  CreateTable(): Table {
    return new Table()
  }

  RemovePlayer() {
    // TBD
  }
}
