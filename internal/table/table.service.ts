import Table from './table'

export default class TableService {
  constructor () {}

  CreateTable (): Table {
    return new Table()
  }

  CloseTable () {
    // TBD
  }
}
