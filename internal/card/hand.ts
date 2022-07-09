import { v4 as uuidv4 } from 'uuid'
import Card, {
  VALUE_ACE,
  VALUE_KING,
  VALUE_QUEEN,
  VALUE_JACK,
  VALUE_TEN,
  VALUE_NINE,
  VALUE_EIGHT,
  VALUE_SEVEN,
  VALUE_SIX,
  VALUE_FIVE,
  VALUE_FOUR,
  VALUE_THREE,
  VALUE_TWO
} from './card'

export default class Hand {
  Id: string = uuidv4()
  Cards: Card[] = []

  Deal (card: Card) {
    this.Cards.push(card)
    this.Sort()
  }

  Score (): number {
    return this.Cards.reduce((score, card) => {
      switch (card.Value) {
        case VALUE_ACE:
          return score + 11 < 21 ? score + 11 : score + 1
        case VALUE_KING:
          return score + 10
        case VALUE_QUEEN:
          return score + 10
        case VALUE_JACK:
          return score + 10
        case VALUE_TEN:
          return score + 10
        case VALUE_NINE:
          return score + 9
        case VALUE_EIGHT:
          return score + 8
        case VALUE_SEVEN:
          return score + 7
        case VALUE_SIX:
          return score + 6
        case VALUE_FIVE:
          return score + 5
        case VALUE_FOUR:
          return score + 4
        case VALUE_THREE:
          return score + 3
        case VALUE_TWO:
          return score + 2
        default:
          return score
      }
    }, 0)
  }

  Sort () {
    this.Cards = this.Cards.sort((a, b) => {
      if (
        (a.Value === VALUE_ACE) &&
                (b.Value === VALUE_ACE)
      ) {
        return 0
      } else if (
        (a.Value === VALUE_ACE) &&
                (
                  (b.Value === VALUE_KING) ||
                    (b.Value === VALUE_QUEEN) ||
                    (b.Value === VALUE_JACK) ||
                    (b.Value === VALUE_TEN)
                )
      ) {
        return 1
      } else if (
        (
          (a.Value === VALUE_ACE) ||
                    (a.Value === VALUE_KING) ||
                    (a.Value === VALUE_QUEEN) ||
                    (a.Value === VALUE_JACK) ||
                    (a.Value === VALUE_TEN)
        ) && (
          (b.Value === VALUE_NINE) ||
                    (b.Value === VALUE_EIGHT) ||
                    (b.Value === VALUE_SEVEN) ||
                    (b.Value === VALUE_SIX) ||
                    (b.Value === VALUE_FIVE) ||
                    (b.Value === VALUE_FOUR) ||
                    (b.Value === VALUE_THREE) ||
                    (b.Value === VALUE_TWO)
        )
      ) {
        return 1
      } else if (
        (a.Value === VALUE_NINE) &&
                (
                  (b.Value === VALUE_EIGHT) ||
                    (b.Value === VALUE_SEVEN) ||
                    (b.Value === VALUE_SIX) ||
                    (b.Value === VALUE_FIVE) ||
                    (b.Value === VALUE_FOUR) ||
                    (b.Value === VALUE_THREE) ||
                    (b.Value === VALUE_TWO)
                )
      ) {
        return 1
      } else if (
        (a.Value === VALUE_EIGHT) &&
                (
                  (b.Value === VALUE_SEVEN) ||
                    (b.Value === VALUE_SIX) ||
                    (b.Value === VALUE_FIVE) ||
                    (b.Value === VALUE_FOUR) ||
                    (b.Value === VALUE_THREE) ||
                    (b.Value === VALUE_TWO)
                )
      ) {
        return 1
      } else if (
        (a.Value === VALUE_SEVEN) &&
                (
                  (b.Value === VALUE_SIX) ||
                    (b.Value === VALUE_FIVE) ||
                    (b.Value === VALUE_FOUR) ||
                    (b.Value === VALUE_THREE) ||
                    (b.Value === VALUE_TWO)
                )
      ) {
        return 1
      } else if (
        (a.Value === VALUE_SIX) &&
                (
                  (b.Value === VALUE_FIVE) ||
                    (b.Value === VALUE_FOUR) ||
                    (b.Value === VALUE_THREE) ||
                    (b.Value === VALUE_TWO)
                )
      ) {
        return 1
      } else if (
        (a.Value === VALUE_FIVE) &&
                (
                  (b.Value === VALUE_FOUR) ||
                    (b.Value === VALUE_THREE) ||
                    (b.Value === VALUE_TWO)
                )
      ) {
        return 1
      } else if (
        (a.Value === VALUE_FOUR) &&
                (
                  (b.Value === VALUE_THREE) ||
                    (b.Value === VALUE_TWO)
                )
      ) {
        return 1
      } else if (
        (a.Value === VALUE_THREE) && (b.Value === VALUE_TWO)
      ) {
        return 1
      } else {
        return -1
      }
    })
  }
}
