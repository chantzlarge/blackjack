import Table from './table'
import TableRepository from './table.repository'

export default class TableService {
  tableRepository: TableRepository

  constructor(tableRepository: TableRepository) {
    this.tableRepository = tableRepository
  }

  CloseTable() {
    // TBD
  }

  CreateTable(): Table {
    return new Table()
  }

  DeleteTable() {
    // TBD
  }
}
