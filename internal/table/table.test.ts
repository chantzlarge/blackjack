import Table from './table'

describe('Table', () => {
    describe('new', () => {
        test('SHOULD construct new instance of Table', () => {
            const table = new Table()

            expect(table).toBeInstanceOf(Table)
        })
    })
})