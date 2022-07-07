import Table from './table'
import TableRepository from './table.repository'
import TableService from './table.service'

test('SHOULD create table', function () {
  // arrange
  const tr = new TableRepository()
  const ts = new TableService(tr)
  const t = ts.CreateTable()

  expect(t).toBeDefined()
})
