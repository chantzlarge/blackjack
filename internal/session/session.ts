import { v4 as uuidv4 } from 'uuid'

export default class Session {
  Id: string = uuidv4()
  Secret: string= Buffer.from(uuidv4()).toString('base64')
}
