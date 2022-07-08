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
  Balance: number = 500
  Name!: string
  Hand: Card[] = []
  CurrentBet: number = 0
  PreviousBet: number = 0
  SessionId!: string

  constructor() {
    this.Id = uuidv4()

    // NOTE: random array selection using bitwise OR operator
    this.Name = `${adjectives[~~Math.floor(Math.random() * adjectives.length)]} ${animals[~~Math.floor(Math.random() * adjectives.length)]}`
  }

  BuyInsurance() {
    // TBD
  }

  DealCard(player: Player) {
    // TBD
  }

  PlaceBet() {
    // TBD
  }

  SplitHand() {
    // TBD
  }
}
