import { v4 as uuidv4 } from 'uuid'
import Card, { Kind } from './card'

export default class Hand {
  Id: string = uuidv4()
  Cards: Card[] = []

  Deal (card: Card) {
    this.Cards.push(card)
    this.Sort()
  }

  Score (): number {
    return this.Cards.reduce((score, card) => {
      switch (card.Kind) {
        case Kind.Ace:
          return score + 11 < 21 ? score + 11 : score + 1
        case Kind.King:
          return score + 10
        case Kind.Queen:
          return score + 10
        case Kind.Jack:
          return score + 10
        case Kind.Ten:
          return score + 10
        case Kind.Nine:
          return score + 9
        case Kind.Eight:
          return score + 8
        case Kind.Seven:
          return score + 7
        case Kind.Six:
          return score + 6
        case Kind.Five:
          return score + 5
        case Kind.Four:
          return score + 4
        case Kind.Three:
          return score + 3
        case Kind.Two:
          return score + 2
        default:
          return score
      }
    }, 0)
  }

  Sort () {
    this.Cards = this.Cards.sort((a, b) => {
      if (
        (a.Kind === Kind.Ace) &&
        (b.Kind === Kind.Ace)
      ) {
        return 0
      } else if (
        (a.Kind === Kind.Ace) &&
        (
          (b.Kind === Kind.King) ||
          (b.Kind === Kind.Queen) ||
          (b.Kind === Kind.Jack) ||
          (b.Kind === Kind.Ten)
        )
      ) {
        return 1
      } else if (
        (
          (a.Kind === Kind.Ace) ||
          (a.Kind === Kind.King) ||
          (a.Kind === Kind.Queen) ||
          (a.Kind === Kind.Jack) ||
          (a.Kind === Kind.Ten)
        ) && (
          (b.Kind === Kind.Nine) ||
          (b.Kind === Kind.Eight) ||
          (b.Kind === Kind.Seven) ||
          (b.Kind === Kind.Six) ||
          (b.Kind === Kind.Five) ||
          (b.Kind === Kind.Four) ||
          (b.Kind === Kind.Three) ||
          (b.Kind === Kind.Two)
        )
      ) {
        return 1
      } else if (
        (a.Kind === Kind.Nine) &&
        (
          (b.Kind === Kind.Eight) ||
          (b.Kind === Kind.Seven) ||
          (b.Kind === Kind.Six) ||
          (b.Kind === Kind.Five) ||
          (b.Kind === Kind.Four) ||
          (b.Kind === Kind.Three) ||
          (b.Kind === Kind.Two)
        )
      ) {
        return 1
      } else if (
        (a.Kind === Kind.Eight) &&
        (
          (b.Kind === Kind.Seven) ||
          (b.Kind === Kind.Six) ||
          (b.Kind === Kind.Five) ||
          (b.Kind === Kind.Four) ||
          (b.Kind === Kind.Three) ||
          (b.Kind === Kind.Two)
        )
      ) {
        return 1
      } else if (
        (a.Kind === Kind.Seven) &&
        (
          (b.Kind === Kind.Six) ||
          (b.Kind === Kind.Five) ||
          (b.Kind === Kind.Four) ||
          (b.Kind === Kind.Three) ||
          (b.Kind === Kind.Two)
        )
      ) {
        return 1
      } else if (
        (a.Kind === Kind.Six) &&
        (
          (b.Kind === Kind.Five) ||
          (b.Kind === Kind.Four) ||
          (b.Kind === Kind.Three) ||
          (b.Kind === Kind.Two)
        )
      ) {
        return 1
      } else if (
        (a.Kind === Kind.Five) &&
        (
          (b.Kind === Kind.Four) ||
          (b.Kind === Kind.Three) ||
          (b.Kind === Kind.Two)
        )
      ) {
        return 1
      } else if (
        (a.Kind === Kind.Four) &&
        (
          (b.Kind === Kind.Three) ||
          (b.Kind === Kind.Two)
        )
      ) {
        return 1
      } else if (
        (a.Kind === Kind.Three) && (b.Kind === Kind.Two)
      ) {
        return 1
      } else {
        return -1
      }
    })
  }
}
