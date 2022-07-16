import Table from "./table";
import TableRepository from "./table.repository";

describe('TableRepository', () => {
    describe('new TableRepository()', () => {
        test('SHOULD create new instance of TableRepository', () => {
            const tableRepository = new TableRepository()

            expect(tableRepository).toBeInstanceOf(TableRepository)
        })
    })
    
    describe('#DeleteTable()', () => {
        test('SHOULD delete table', async () => {
            const tableRepository = new TableRepository()
            const table = new Table()
            await tableRepository.InsertTable(table)
            await tableRepository.DeleteTable(table.Id)

            expect(tableRepository.tables).toEqual([])
        })
    })
    
    describe('#InsertTable()', () => {
        test('SHOULD insert table', async () => {
            const tableRepository = new TableRepository()
            const table = new Table()
            await tableRepository.InsertTable(table)

            expect(tableRepository.tables).toEqual([table])
        })
    })
    
    describe('#SelectTableById()', () => {
        test('SHOULD select table by id', async () => {
            const tableRepository = new TableRepository()
            const table = new Table()
            await tableRepository.InsertTable(table)

            tableRepository.SelectTableById(table.Id)
                .then(t => expect(t).toEqual(table))
                .catch(r => expect(r).toBeUndefined())
        })
    })
    
    describe('#UpdateTable()', () => {
        test('SHOULD update table', async () => {
            const tableRepository = new TableRepository()
            const table = new Table()
            await tableRepository.InsertTable(table)
            await tableRepository.UpdateTable(table)

            expect(tableRepository.tables).toEqual([table])
        })
    })
})