import Table from './table'
import TablePublisher from './table.publisher'
import TableRepository from './table.repository'
import TableService from './table.service'

test('SHOULD create table', function () {
  const tablePublisher = new TablePublisher()
  const tableRepository = new TableRepository()
  const tableService = new TableService(tablePublisher, tableRepository)
  const table = tableService.CreateTable()

  expect(table).toBeDefined()
})
