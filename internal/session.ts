import { v4 as uuidv4 } from 'uuid'

export default class Session {
  Id: string
  Secret: string

  constructor () {
    this.Id = uuidv4()
    // TODO: use bcrypt
    this.Secret = Buffer.from(uuidv4()).toString('base64')
  }
}
