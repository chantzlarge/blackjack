import { v4 as uuidv4 } from 'uuid'

export default class Session {
  Id: string
  Secret: string
  TableId!: string
  PlayerId!: string

  constructor () {
    this.Id = uuidv4()
    // TODO: hash secret
    this.Secret = Buffer.from(uuidv4()).toString('base64')
  }
}