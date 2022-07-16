import { v4 as uuidv4 } from 'uuid'
import Card, { Kind } from '../card/card'

export const enum State {
  BUST = 'bust',
  HIT = 'hit',
  STAND = 'stand',
}

export default class Hand {
  Id: string = uuidv4()
  Cards: Card[] = []
  State: State = State.HIT

  Hit(card: Card): Hand {
    this.Cards.push(card)

    if (this.Score() > 21) {
      this.State = State.BUST
    }

    return this
  }

  Score(): number {
    return this.Cards
      .sort((a, b) => a.Compare(b))
      .reduce((p, c) => p += c.Value, 0)
  }

  Stand(): Hand {
    this.State = State.STAND
    
    return this
  }
}
