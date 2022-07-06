import { v4 as uuidv4 } from 'uuid'

export default class Session {
  Id: string
  TableId!: string
  PlayerId!: string

  constructor () {
    this.Id = uuidv4()
  }
}
