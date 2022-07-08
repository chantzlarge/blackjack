import Deck from "../card/deck"
import Card from "../card/card"

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
            ...new Deck().Cards,
        ]

        let ci = this.Cards.length, ri // current index, random index

        while (ci != 0) {
            ri = Math.floor(Math.random() * ci)
            ci--

            // NOTE: swap values using array destructuring
            [this.Cards[ci], this.Cards[ri]] = [this.Cards[ri], this.Cards[ci]]
        }
    }
}