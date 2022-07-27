import { v4 as uuidv4 } from 'uuid'
import Card from '../card/card'
import Hand from '../hand/hand'

export default class Player {
  readonly id: string
  readonly balance: number
  readonly bet: number
  readonly hands: Hand[]
  readonly hasDeclinedInsurance: boolean
  readonly hasInsurance: boolean
  readonly isSitting: boolean

  constructor(
    id: string = uuidv4(),
    balance: number = 500,
    bet: number = 0,
    hands: Hand[] = [],
    hasDeclinedInsurance: boolean = false,
    hasInsurance: boolean = false,
    isSitting: boolean = false,
  ) {
    this.id = id
    this.balance = balance
    this.bet = bet
    this.hands = hands
    this.hasDeclinedInsurance = hasDeclinedInsurance
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
      this.hasDeclinedInsurance,
      this.hasInsurance,
      this.isSitting,
    )
  }

  BuyInsurance(): Player {
    const amount = 0.5 * this.bet

    if (amount > this.balance) {
      throw new Error('amount exceeds player balance')
    }

    return new Player(
      this.id,
      this.balance - amount,
      this.bet,
      this.hands,
      false,
      true,
      false,
    )
  }

  DeclineInsurance(): Player {
    return new Player(
      this.id,
      this.balance,
      this.bet,
      this.hands,
      true,
      false,
      false,
    )
  }

  Hit(card: Card): Player {
    return new Player(
      this.id,
      this.balance,
      this.bet,
      this.hands.filter(h => !h.isBusted || !h.isStanding).map(h => h.Hit(card)),
      this.hasDeclinedInsurance,
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
      this.hasDeclinedInsurance,
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
      this.hasDeclinedInsurance,
      this.hasInsurance,
      false,
    )
  }
}
