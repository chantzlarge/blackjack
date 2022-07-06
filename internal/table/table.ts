import { v4 as uuidv4 } from 'uuid'

export default class Table {
    Id!: string

    constructor() {
        this.Id = uuidv4()
    }
}
