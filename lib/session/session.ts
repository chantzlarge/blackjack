import { v4 as uuidv4 } from 'uuid'

export default class Session {
  readonly playerId: string
  readonly tableId: string
  readonly id: string
  readonly secret: string

  constructor (
    playerId: string,
    tableId: string,
    id: string = uuidv4(),
    secret: string = Buffer.from(uuidv4()).toString('base64')
  ) {
    this.playerId = playerId
    this.tableId = tableId
    this.id = id
    this.secret = secret
  }
}
