import SessionRepository from '../session/session.repository'
import TableRepository from './table.repository'

export default class TableService {
  sessionRepository: SessionRepository
  tableRepository: TableRepository

  constructor (
    sessionRepository: SessionRepository,
    tableRepository: TableRepository
  ) {
    this.sessionRepository = sessionRepository
    this.tableRepository = tableRepository
  }
}
