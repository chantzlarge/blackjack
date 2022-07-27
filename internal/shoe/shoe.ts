import { Deck } from '../deck/deck'
import Card from '../card/card'

export default class Shoe {
  readonly cards: Card[]

  constructor (cards: Card[] = [...Deck, ...Deck, ...Deck, ...Deck, ...Deck, ...Deck]) {
    this.cards = cards
  }

  Draw (): [Card, Shoe] {
    const card = this.cards.slice(0, 1).shift()
    if (card == null) {
      throw new Error('')
    }

    return [card, new Shoe(this.cards.slice(1))]
  }

  Shuffle (): Shoe {
    const cards: Card[] = [...this.cards]
    let ci = cards.length; let ri

    while (ci > 0) {
      ri = Math.floor(Math.random() * ci)
      ci--

      [cards[ci], cards[ri]] = [cards[ri], cards[ci]]
    }

    return new Shoe(cards)
  }
}
