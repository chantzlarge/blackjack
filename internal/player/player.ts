import { v4 as uuidv4 } from 'uuid'
import Card from '../card/card'
import Hand from '../hand/hand'

export const enum State {
  PLAYING = 'playing',
  SITTING = 'sitting'
}

export default class Player {
  Id: string = uuidv4()
  CurrentBet: number = 0
  PreviousBet: number = 0
  Balance: number = 500
  Hands: Hand[] = []
  HasInsurance: boolean = false
  State = State.SITTING

  Bet (amount: number): Promise<Player> {
    return new Promise((resolve, reject) => {
      if (amount > this.Balance) {
        reject('bet amount exceeds available balance')
      }

      this.PreviousBet = this.CurrentBet
      this.CurrentBet = amount
      this.Balance -= amount
      this.State = State.PLAYING

      resolve(this)
    })
  }

  BuyInsurance (): Promise<Player> {
    return new Promise((resolve, reject) => {
      if (0.5 * this.CurrentBet > this.Balance) {
        reject('insurance amount exceeds available balance')
      }

      this.Balance -= 0.5 * this.CurrentBet
      this.HasInsurance = true

      resolve(this)
    })
  }

  Hit (handId: string, card: Card): Promise<Player> {
    return new Promise((resolve) => {
      this.Hands = this.Hands.map(h => h.Id === handId ? h.Deal(card) : h)

      resolve(this)
    })
  }

  Pay (amount: number): Promise<Player> {
    return new Promise((resolve) => {
      this.Balance += amount

      resolve(this)
    })
  }

  Play (): Promise<Player> {
    return new Promise((resolve) => {
      this.State = State.PLAYING

      resolve(this)
    })
  }

  Sit (): Promise<Player> {
    return new Promise((resolve) => {
      this.CurrentBet = 0
      this.Hands = []
      this.State = State.SITTING

      resolve(this)
    })
  }
}
