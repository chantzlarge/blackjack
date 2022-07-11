import Table from "./table";

export default class TableRepository {
    tables: Table[] = []

    DeleteTable(id: string) {
        this.tables = this.tables.filter(t => t.Id !== id)
    }

    InsertTable(table: Table) {
        this.tables.push(table)
    }

    SelectTableById(id: string): Table | undefined {
        return this.tables.find(t => t.Id === id)
    }

    UpdateTable(table: Table) {
        const index = this.tables.findIndex(t => t.Id === table.Id)

        this.tables[index] = table
    }
}
