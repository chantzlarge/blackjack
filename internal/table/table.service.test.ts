import Table from './table'
import TableService from './table.service'

test('SHOULD create table', function(){
    // arrange
    let ts = new TableService
    let t = ts.CreateTable()
    
    expect(t).toBeDefined()
})