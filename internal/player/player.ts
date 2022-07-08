import Card from '../card/card'
import { v4 as uuidv4 } from 'uuid'

const adjectives = [
  'agreeable',
  'charming',
  'comical',
  'curious',
  'delightful',
  'enjoyable',
  'lively',
  'pleasant',
  'quirky',
  'witty'
]

const animals = [
  'alligator',
  'black bear',
  'deer',
  'elephant',
  'elk',
  'gecko',
  'giraffe',
  'leopard',
  'lizzard',
  'mongoose',
  'mouse',
  'rat',
  'wombat',
  'zebra'
]

export default class Player {
  Id: string
  SessionId!: string
  TableId!: string
  Name!: string
  Hand: Card[] = []

  constructor (tableId: string) {
    this.Id = uuidv4()
    this.TableId = tableId

    this.Name = `${adjectives[~~Math.floor(Math.random() * adjectives.length)]} ${animals[~~Math.floor(Math.random() * adjectives.length)]}`
  }
}
