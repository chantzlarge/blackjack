import { v4 as uuidv4 } from 'uuid'

export const enum Suit {
  CLUBS = 'clubs',
  DIAMONDS = 'diamonds',
  HEARTS = 'hearts',
  SPADES = 'spades',
}

export const enum Kind {
  ACE = 'ace',
  KING = 'king',
  QUEEN = 'queen',
  JACK = 'jack',
  NINE = 'nine',
  EIGHT = 'eight',
  TEN = 'ten',
  SEVEN = 'seven',
  SIX = 'six',
  FIVE = 'five',
  FOUR = 'four',
  THREE = 'three',
  TWO = 'two',
}

export default class Card {
  Id: string = uuidv4()
  Kind: Kind
  Suit: Suit
  Value: number

  constructor (kind: Kind, suit: Suit, value: number) {
    this.Kind = kind
    this.Suit = suit
    this.Value = value
  }

  Compare (card: Card) {
    if (this.Value > card.Value) {
      return 1
    } else if (this.Value < card.Value) {
      return -1
    } else {
      return 0
    }
  }

  String (): string {
    return `${this.Kind}_of_${this.Suit}`
  }
}

export const ACE_OF_CLUBS = new Card(Kind.ACE, Suit.CLUBS, 11)
export const ACE_OF_DIAMONDS = new Card(Kind.ACE, Suit.DIAMONDS, 11)
export const ACE_OF_HEARTS = new Card(Kind.ACE, Suit.HEARTS, 11)
export const ACE_OF_SPADES = new Card(Kind.ACE, Suit.SPADES, 11)

export const KING_OF_CLUBS = new Card(Kind.KING, Suit.CLUBS, 10)
export const KING_OF_DIAMONDS = new Card(Kind.KING, Suit.DIAMONDS, 10)
export const KING_OF_HEARTS = new Card(Kind.KING, Suit.HEARTS, 10)
export const KING_OF_SPADES = new Card(Kind.KING, Suit.SPADES, 10)

export const QUEEN_OF_CLUBS = new Card(Kind.QUEEN, Suit.CLUBS, 10)
export const QUEEN_OF_DIAMONDS = new Card(Kind.QUEEN, Suit.DIAMONDS, 10)
export const QUEEN_OF_HEARTS = new Card(Kind.QUEEN, Suit.HEARTS, 10)
export const QUEEN_OF_SPADES = new Card(Kind.QUEEN, Suit.SPADES, 10)

export const JACK_OF_CLUBS = new Card(Kind.JACK, Suit.CLUBS, 10)
export const JACK_OF_DIAMONDS = new Card(Kind.JACK, Suit.DIAMONDS, 10)
export const JACK_OF_HEARTS = new Card(Kind.JACK, Suit.HEARTS, 10)
export const JACK_OF_SPADES = new Card(Kind.JACK, Suit.SPADES, 10)

export const TEN_OF_CLUBS = new Card(Kind.TEN, Suit.CLUBS, 10)
export const TEN_OF_DIAMONDS = new Card(Kind.TEN, Suit.DIAMONDS, 10)
export const TEN_OF_HEARTS = new Card(Kind.TEN, Suit.HEARTS, 10)
export const TEN_OF_SPADES = new Card(Kind.TEN, Suit.SPADES, 10)

export const NINE_OF_CLUBS = new Card(Kind.NINE, Suit.CLUBS, 9)
export const NINE_OF_DIAMONDS = new Card(Kind.NINE, Suit.DIAMONDS, 9)
export const NINE_OF_HEARTS = new Card(Kind.NINE, Suit.HEARTS, 9)
export const NINE_OF_SPADES = new Card(Kind.NINE, Suit.SPADES, 9)

export const EIGHT_OF_CLUBS = new Card(Kind.EIGHT, Suit.CLUBS, 8)
export const EIGHT_OF_DIAMONDS = new Card(Kind.EIGHT, Suit.DIAMONDS, 8)
export const EIGHT_OF_HEARTS = new Card(Kind.EIGHT, Suit.HEARTS, 8)
export const EIGHT_OF_SPADES = new Card(Kind.EIGHT, Suit.SPADES, 8)

export const SEVEN_OF_CLUBS = new Card(Kind.SEVEN, Suit.CLUBS, 7)
export const SEVEN_OF_DIAMONDS = new Card(Kind.SEVEN, Suit.DIAMONDS, 7)
export const SEVEN_OF_HEARTS = new Card(Kind.SEVEN, Suit.HEARTS, 7)
export const SEVEN_OF_SPADES = new Card(Kind.SEVEN, Suit.SPADES, 7)

export const SIX_OF_CLUBS = new Card(Kind.SIX, Suit.CLUBS, 6)
export const SIX_OF_DIAMONDS = new Card(Kind.SIX, Suit.DIAMONDS, 6)
export const SIX_OF_HEARTS = new Card(Kind.SIX, Suit.HEARTS, 6)
export const SIX_OF_SPADES = new Card(Kind.SIX, Suit.SPADES, 6)

export const FIVE_OF_CLUBS = new Card(Kind.FIVE, Suit.CLUBS, 5)
export const FIVE_OF_DIAMONDS = new Card(Kind.FIVE, Suit.DIAMONDS, 5)
export const FIVE_OF_HEARTS = new Card(Kind.FIVE, Suit.HEARTS, 5)
export const FIVE_OF_SPADES = new Card(Kind.FIVE, Suit.SPADES, 5)

export const FOUR_OF_CLUBS = new Card(Kind.FOUR, Suit.CLUBS, 4)
export const FOUR_OF_DIAMONDS = new Card(Kind.FOUR, Suit.DIAMONDS, 4)
export const FOUR_OF_HEARTS = new Card(Kind.FOUR, Suit.HEARTS, 4)
export const FOUR_OF_SPADES = new Card(Kind.FOUR, Suit.SPADES, 4)

export const THREE_OF_CLUBS = new Card(Kind.THREE, Suit.CLUBS, 3)
export const THREE_OF_DIAMONDS = new Card(Kind.THREE, Suit.DIAMONDS, 3)
export const THREE_OF_HEARTS = new Card(Kind.THREE, Suit.HEARTS, 3)
export const THREE_OF_SPADES = new Card(Kind.THREE, Suit.SPADES, 3)

export const TWO_OF_CLUBS = new Card(Kind.TWO, Suit.CLUBS, 2)
export const TWO_OF_DIAMONDS = new Card(Kind.TWO, Suit.DIAMONDS, 2)
export const TWO_OF_HEARTS = new Card(Kind.TWO, Suit.HEARTS, 2)
export const TWO_OF_SPADES = new Card(Kind.TWO, Suit.SPADES, 2)
