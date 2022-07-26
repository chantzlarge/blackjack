import { v4 as uuidv4 } from 'uuid'
import Card from '../card/card'
import Hand from '../hand/hand'

export default class Player {
  readonly id: string
  readonly balance: number
  readonly bet: number
  readonly hands: Hand[]
  readonly hasInsurance: boolean
  readonly isSitting: boolean

  constructor(
    id: string = uuidv4(),
    balance: number = 500,
    bet: number = 0,
    hands: Hand[] = [],
    hasInsurance: boolean = false,
    isSitting: boolean = false,

  ) {
    this.id = id
    this.balance = balance
    this.bet = bet
    this.hands = hands
    this.hasInsurance = hasInsurance
    this.isSitting = isSitting
  }

  Bet(amount: number): Player {
    if (amount > this.balance) {
      throw new Error('amount exceeds player balance')
    }

    return new Player(
      this.id,
      this.balance - amount,
      amount,
      this.hands,
      this.hasInsurance,
      this.isSitting,
    )
  }

  Hit(card: Card): Player {
    return new Player(
      this.id,
      this.balance,
      this.bet,
      this.hands.map(h => (!h.isBusted || !h.isStanding) ? h.Hit(card) : h),
      this.hasInsurance,
      false,
    )
  }

  Pay(amount: number): Player {
    return new Player(
      this.id,
      this.balance + amount,
      this.bet,
      this.hands,
      this.hasInsurance,
      false,
    )
  }

  Sit(): Player {
    return new Player(
      this.id,
      this.balance,
      0,
      [],
      false,
      true,
    )
  }

  Stand(): Player {
    return new Player(
      this.id,
      this.balance,
      this.bet,
      this.hands.map(h => (!h.isBusted || !h.isStanding) ? h.Stand() : h),
      this.hasInsurance,
      false,
    )
  }
}
