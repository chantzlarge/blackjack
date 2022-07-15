import Table from './table'
import SessionRepository from './session.repository'
import TableRepository from './table.repository'
import TableService from './table.service'

test('SHOULD create table', function () {
  const sessionRepository = new SessionRepository()
  const tableRepository = new TableRepository()
  const tableService = new TableService(sessionRepository, tableRepository)
  const table = tableService.CreateTable({
    Parameters: {
      SessionId: 'test'
    }
  })

  expect(table).toBeDefined()
})
