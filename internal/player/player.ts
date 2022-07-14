import { v4 as uuidv4 } from 'uuid'
import Card from '../table/card'
import Hand from '../table/hand'

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
  SessionId: string
  TableId: string
  Balance: number = 500
  Name!: string
  Hands: Hand[] = [new Hand()]
  HasInsurance: boolean = false
  CurrentBet: number = 0
  PreviousBets: number[] = []

  constructor (sessionId: string, tableId: string) {
    this.Id = uuidv4()
    this.SessionId = sessionId
    this.TableId = tableId

    // NOTE: random array selection using bitwise OR operator
    this.Name = `${adjectives[~~Math.floor(Math.random() * adjectives.length)]} ${animals[~~Math.floor(Math.random() * adjectives.length)]}`
  }

  BuyInsurance () {
    this.HasInsurance = true
    this.Balance -= 0.5 * this.CurrentBet
  }

  DealCard (card: Card, hand: 0 | 1 = 0): Player {
    this.Hands[hand].Deal(card)

    return this
  }

  DecreaseBalance (amount: number) {
    this.Balance -= amount
  }

  IncreaseBalance (amount: number) {
    this.Balance += amount
  }

  PlaceBet (amount: number) {
    this.PreviousBets.push(this.CurrentBet)
    this.CurrentBet = amount
    this.Balance -= this.CurrentBet

    if (this.Balance < 0) {
      this.Balance += this.CurrentBet
      this.CurrentBet = this.PreviousBets.pop()!

      throw new Error('bet amount exceeds current balance')
    }
  }

  SplitHand () {
    // NOTE: split hands using array destructuring
    [this.Hands[0].Cards[0], this.Hands[1].Cards[0]] = [this.Hands[0].Cards[0], this.Hands[0].Cards[1]]
  }
}
