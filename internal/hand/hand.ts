
import { v4 as uuidv4 } from 'uuid'
import Card from '../card/card'

export default class Hand {
  readonly id = uuidv4()
  readonly cards: Card[]
  readonly isBusted: boolean
  readonly isStanding: boolean

  constructor(
    cards: Card[] = [],
    isBusted: boolean = false,
    isStanding: boolean = false,
  ) {
    this.cards = cards
    this.isBusted = isBusted
    this.isStanding = isStanding
  }

  Hit(card: Card): Hand {
    if (this.isBusted) {
      throw new Error('hand is busted')
    }

    const isStanding = card.value + this.Score() === 21
    const isBusted = card.value + this.Score() > 21 && card.value !== 11
    const cards = isBusted ? [] : [...this.cards, card]

    return new Hand(
      cards,
      isBusted,
      isStanding,
    )
  }

  Score(): number {
    return this.cards
      .map(c => c.value)
      .sort()
      .reduce((p, c) => (c === 11 && p + c > 21) ? p + 1 : p + c, 0)
  }

  Stand(): Hand {
    if (this.isBusted) {
      throw new Error('hand is busted')
    }

    return new Hand(
      this.cards,
      false,
      true,
    )
  }
}
