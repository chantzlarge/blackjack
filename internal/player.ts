import {v4 as uuidv4} from 'uuid'

export default class Player {
    Id: string = uuidv4()
    SessionId: string
    Balance: number = 500

    constructor(sessionId: string) {
        this.SessionId = sessionId
    }
}