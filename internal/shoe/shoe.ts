import Deck from '../deck/deck'
import Card from '../card/card'

export default class Shoe {
  Cards: Card[] = []

  CardsRemaining(): number {
    return this.Cards.length
  }

  DrawCard(): Card | undefined {
    return this.Cards.pop()
  }

  ShuffleAndLoad() {
    this.Cards = [
      ...new Deck().Cards,
      ...new Deck().Cards,
      ...new Deck().Cards,
      ...new Deck().Cards,
      ...new Deck().Cards,
      ...new Deck().Cards,
      ...new Deck().Cards
    ]

    let currentIndex = this.Cards.length;
    let randomIndex

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [this.Cards[currentIndex], this.Cards[randomIndex]] = [this.Cards[randomIndex], this.Cards[currentIndex]]
    }
  }
}
