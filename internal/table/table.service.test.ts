import Table from './table'
import TableService from './table.service'

test('SHOULD create table', function () {
  // arrange
  const ts = new TableService()
  const t = ts.CreateTable()

  expect(t).toBeDefined()
})
