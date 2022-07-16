import Deck from '../deck/deck'
import Card from '../card/card'

export default class Shoe {
  Cards: Card[] = []

  constructor() {
    this.Shuffle()
  }

  Draw (): Card | undefined {
    if (this.Remaining() < 208) {
      this.Shuffle()
    }

    return this.Cards.pop()
  }

  Remaining (): number {
    return this.Cards.length
  }

  Shuffle () {
    this.Cards = [
      ...new Deck().Cards,
      ...new Deck().Cards,
      ...new Deck().Cards,
      ...new Deck().Cards,
      ...new Deck().Cards,
      ...new Deck().Cards,
    ]

    let currentIndex = this.Cards.length
    let randomIndex

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [this.Cards[currentIndex], this.Cards[randomIndex]] = [this.Cards[randomIndex], this.Cards[currentIndex]]
    }
  }
}
