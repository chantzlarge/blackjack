import { v4 as uuidv4 } from 'uuid'
import Card, {
  KIND_ACE,
  KIND_KING,
  KIND_QUEEN,
  KIND_JACK,
  KIND_TEN,
  KIND_NINE,
  KIND_EIGHT,
  KIND_SEVEN,
  KIND_SIX,
  KIND_FIVE,
  KIND_FOUR,
  KIND_THREE,
  KIND_TWO
} from './card'

export default class Hand {
  Id: string = uuidv4()
  Cards: Card[] = []

  Deal(card: Card) {
    this.Cards.push(card)
    this.Sort()
  }

  Score(): number {
    return this.Cards.reduce((score, card) => {
      switch (card.Kind) {
        case KIND_ACE:
          return score + 11 < 21 ? score + 11 : score + 1
        case KIND_KING:
          return score + 10
        case KIND_QUEEN:
          return score + 10
        case KIND_JACK:
          return score + 10
        case KIND_TEN:
          return score + 10
        case KIND_NINE:
          return score + 9
        case KIND_EIGHT:
          return score + 8
        case KIND_SEVEN:
          return score + 7
        case KIND_SIX:
          return score + 6
        case KIND_FIVE:
          return score + 5
        case KIND_FOUR:
          return score + 4
        case KIND_THREE:
          return score + 3
        case KIND_TWO:
          return score + 2
        default:
          return score
      }
    }, 0)
  }

  Sort() {
    this.Cards = this.Cards.sort((a, b) => {
      if (
        (a.Kind === KIND_ACE) &&
        (b.Kind === KIND_ACE)
      ) {
        return 0
      } else if (
        (a.Kind === KIND_ACE) &&
        (
          (b.Kind === KIND_KING) ||
          (b.Kind === KIND_QUEEN) ||
          (b.Kind === KIND_JACK) ||
          (b.Kind === KIND_TEN)
        )
      ) {
        return 1
      } else if (
        (
          (a.Kind === KIND_ACE) ||
          (a.Kind === KIND_KING) ||
          (a.Kind === KIND_QUEEN) ||
          (a.Kind === KIND_JACK) ||
          (a.Kind === KIND_TEN)
        ) && (
          (b.Kind === KIND_NINE) ||
          (b.Kind === KIND_EIGHT) ||
          (b.Kind === KIND_SEVEN) ||
          (b.Kind === KIND_SIX) ||
          (b.Kind === KIND_FIVE) ||
          (b.Kind === KIND_FOUR) ||
          (b.Kind === KIND_THREE) ||
          (b.Kind === KIND_TWO)
        )
      ) {
        return 1
      } else if (
        (a.Kind === KIND_NINE) &&
        (
          (b.Kind === KIND_EIGHT) ||
          (b.Kind === KIND_SEVEN) ||
          (b.Kind === KIND_SIX) ||
          (b.Kind === KIND_FIVE) ||
          (b.Kind === KIND_FOUR) ||
          (b.Kind === KIND_THREE) ||
          (b.Kind === KIND_TWO)
        )
      ) {
        return 1
      } else if (
        (a.Kind === KIND_EIGHT) &&
        (
          (b.Kind === KIND_SEVEN) ||
          (b.Kind === KIND_SIX) ||
          (b.Kind === KIND_FIVE) ||
          (b.Kind === KIND_FOUR) ||
          (b.Kind === KIND_THREE) ||
          (b.Kind === KIND_TWO)
        )
      ) {
        return 1
      } else if (
        (a.Kind === KIND_SEVEN) &&
        (
          (b.Kind === KIND_SIX) ||
          (b.Kind === KIND_FIVE) ||
          (b.Kind === KIND_FOUR) ||
          (b.Kind === KIND_THREE) ||
          (b.Kind === KIND_TWO)
        )
      ) {
        return 1
      } else if (
        (a.Kind === KIND_SIX) &&
        (
          (b.Kind === KIND_FIVE) ||
          (b.Kind === KIND_FOUR) ||
          (b.Kind === KIND_THREE) ||
          (b.Kind === KIND_TWO)
        )
      ) {
        return 1
      } else if (
        (a.Kind === KIND_FIVE) &&
        (
          (b.Kind === KIND_FOUR) ||
          (b.Kind === KIND_THREE) ||
          (b.Kind === KIND_TWO)
        )
      ) {
        return 1
      } else if (
        (a.Kind === KIND_FOUR) &&
        (
          (b.Kind === KIND_THREE) ||
          (b.Kind === KIND_TWO)
        )
      ) {
        return 1
      } else if (
        (a.Kind === KIND_THREE) && (b.Kind === KIND_TWO)
      ) {
        return 1
      } else {
        return -1
      }
    })
  }
}
