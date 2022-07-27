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
  TEN = 'ten',
  NINE = 'nine',
  EIGHT = 'eight',
  SEVEN = 'seven',
  SIX = 'six',
  FIVE = 'five',
  FOUR = 'four',
  THREE = 'three',
  TWO = 'two',
}

export const enum Value {
  ELEVEN = 11,
  TEN = 10,
  NINE = 9,
  EIGHT = 8,
  SEVEN = 7,
  SIX = 6,
  FIVE = 5,
  FOUR = 4,
  THREE = 3,
  TWO = 2,
}

export default class Card {
  readonly id: string = uuidv4()
  readonly kind: Kind
  readonly suit: Suit
  readonly value: number

  constructor (
    kind: Kind,
    suit: Suit,
    value: number

  ) {
    this.kind = kind
    this.suit = suit
    this.value = value
  }
}

export const ACE_OF_CLUBS = new Card(Kind.ACE, Suit.CLUBS, Value.ELEVEN)
export const ACE_OF_DIAMONDS = new Card(Kind.ACE, Suit.DIAMONDS, Value.ELEVEN)
export const ACE_OF_HEARTS = new Card(Kind.ACE, Suit.HEARTS, Value.ELEVEN)
export const ACE_OF_SPADES = new Card(Kind.ACE, Suit.SPADES, Value.ELEVEN)
export const KING_OF_CLUBS = new Card(Kind.KING, Suit.CLUBS, Value.TEN)
export const KING_OF_DIAMONDS = new Card(Kind.KING, Suit.DIAMONDS, Value.TEN)
export const KING_OF_HEARTS = new Card(Kind.KING, Suit.HEARTS, Value.TEN)
export const KING_OF_SPADES = new Card(Kind.KING, Suit.SPADES, Value.TEN)
export const QUEEN_OF_CLUBS = new Card(Kind.QUEEN, Suit.CLUBS, Value.TEN)
export const QUEEN_OF_DIAMONDS = new Card(Kind.QUEEN, Suit.DIAMONDS, Value.TEN)
export const QUEEN_OF_HEARTS = new Card(Kind.QUEEN, Suit.HEARTS, Value.TEN)
export const QUEEN_OF_SPADES = new Card(Kind.QUEEN, Suit.SPADES, Value.TEN)
export const JACK_OF_CLUBS = new Card(Kind.JACK, Suit.CLUBS, Value.TEN)
export const JACK_OF_DIAMONDS = new Card(Kind.JACK, Suit.DIAMONDS, Value.TEN)
export const JACK_OF_HEARTS = new Card(Kind.JACK, Suit.HEARTS, Value.TEN)
export const JACK_OF_SPADES = new Card(Kind.JACK, Suit.SPADES, Value.TEN)
export const TEN_OF_CLUBS = new Card(Kind.TEN, Suit.CLUBS, Value.TEN)
export const TEN_OF_DIAMONDS = new Card(Kind.TEN, Suit.DIAMONDS, Value.TEN)
export const TEN_OF_HEARTS = new Card(Kind.TEN, Suit.HEARTS, Value.TEN)
export const TEN_OF_SPADES = new Card(Kind.TEN, Suit.SPADES, Value.TEN)
export const NINE_OF_CLUBS = new Card(Kind.NINE, Suit.CLUBS, Value.NINE)
export const NINE_OF_DIAMONDS = new Card(Kind.NINE, Suit.DIAMONDS, Value.NINE)
export const NINE_OF_HEARTS = new Card(Kind.NINE, Suit.HEARTS, Value.NINE)
export const NINE_OF_SPADES = new Card(Kind.NINE, Suit.SPADES, Value.NINE)
export const EIGHT_OF_CLUBS = new Card(Kind.EIGHT, Suit.CLUBS, Value.EIGHT)
export const EIGHT_OF_DIAMONDS = new Card(Kind.EIGHT, Suit.DIAMONDS, Value.EIGHT)
export const EIGHT_OF_HEARTS = new Card(Kind.EIGHT, Suit.HEARTS, Value.EIGHT)
export const EIGHT_OF_SPADES = new Card(Kind.EIGHT, Suit.SPADES, Value.EIGHT)
export const SEVEN_OF_CLUBS = new Card(Kind.SEVEN, Suit.CLUBS, Value.SEVEN)
export const SEVEN_OF_DIAMONDS = new Card(Kind.SEVEN, Suit.DIAMONDS, Value.SEVEN)
export const SEVEN_OF_HEARTS = new Card(Kind.SEVEN, Suit.HEARTS, Value.SEVEN)
export const SEVEN_OF_SPADES = new Card(Kind.SEVEN, Suit.SPADES, Value.SEVEN)
export const SIX_OF_CLUBS = new Card(Kind.SIX, Suit.CLUBS, Value.SIX)
export const SIX_OF_DIAMONDS = new Card(Kind.SIX, Suit.DIAMONDS, Value.SIX)
export const SIX_OF_HEARTS = new Card(Kind.SIX, Suit.HEARTS, Value.SIX)
export const SIX_OF_SPADES = new Card(Kind.SIX, Suit.SPADES, Value.SIX)
export const FIVE_OF_CLUBS = new Card(Kind.FIVE, Suit.CLUBS, Value.FIVE)
export const FIVE_OF_DIAMONDS = new Card(Kind.FIVE, Suit.DIAMONDS, Value.FIVE)
export const FIVE_OF_HEARTS = new Card(Kind.FIVE, Suit.HEARTS, Value.FIVE)
export const FIVE_OF_SPADES = new Card(Kind.FIVE, Suit.SPADES, Value.FIVE)
export const FOUR_OF_CLUBS = new Card(Kind.FOUR, Suit.CLUBS, Value.FOUR)
export const FOUR_OF_DIAMONDS = new Card(Kind.FOUR, Suit.DIAMONDS, Value.FOUR)
export const FOUR_OF_HEARTS = new Card(Kind.FOUR, Suit.HEARTS, Value.FOUR)
export const FOUR_OF_SPADES = new Card(Kind.FOUR, Suit.SPADES, Value.FOUR)
export const THREE_OF_CLUBS = new Card(Kind.THREE, Suit.CLUBS, Value.THREE)
export const THREE_OF_DIAMONDS = new Card(Kind.THREE, Suit.DIAMONDS, Value.THREE)
export const THREE_OF_HEARTS = new Card(Kind.THREE, Suit.HEARTS, Value.THREE)
export const THREE_OF_SPADES = new Card(Kind.THREE, Suit.SPADES, Value.THREE)
export const TWO_OF_CLUBS = new Card(Kind.TWO, Suit.CLUBS, Value.TWO)
export const TWO_OF_DIAMONDS = new Card(Kind.TWO, Suit.DIAMONDS, Value.TWO)
export const TWO_OF_HEARTS = new Card(Kind.TWO, Suit.HEARTS, Value.TWO)
export const TWO_OF_SPADES = new Card(Kind.TWO, Suit.SPADES, Value.TWO)
