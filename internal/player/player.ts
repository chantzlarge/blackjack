import { v4 as uuidv4 } from 'uuid'

export default class Player {
    Id: string;
    Name!: string;

    constructor() {
        this.Id = uuidv4()
    }
}
