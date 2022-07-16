import Deck from '../deck/deck'
import Card from '../card/card'

export default class Shoe {
  Cards: Card[] = []

  constructor () {
    this.Shuffle()
  }

  Draw (): Card {
    if (this.Remaining() < 208) {
      this.Shuffle()
    }

    return this.Cards.pop()!
  }

  Remaining (): number {
    return this.Cards.length
  }

  Shuffle (): Shoe {
    this.Cards = [
      ...new Deck().Cards,
      ...new Deck().Cards,
      ...new Deck().Cards,
      ...new Deck().Cards,
      ...new Deck().Cards,
      ...new Deck().Cards
    ]

    let ci = this.Cards.length; let ri

    while (ci != 0) {
      ri = Math.floor(Math.random() * ci)
      ci--
      [this.Cards[ci], this.Cards[ri]] = [this.Cards[ri], this.Cards[ci]]
    }

    return this
  }
}
