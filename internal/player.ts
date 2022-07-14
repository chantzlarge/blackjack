import {v4 as uuidv4} from 'uuid'
import Hand from './hand'

export default class Player {
    Id: string = uuidv4()
    SessionId: string
    CurrentBet: number = 0
    PreviousBet: number = 0
    Balance: number = 500
    Hands: Hand[] = [new Hand()]

    constructor(sessionId: string) {
        this.SessionId = sessionId
    }
}