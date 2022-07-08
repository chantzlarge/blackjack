import { v4 as uuidv4 } from 'uuid'

export const KIND_TWO = 'two'
export const KIND_THREE = 'three'
export const KIND_FOUR = 'four'
export const KIND_FIVE = 'five'
export const KIND_SIX = 'six'
export const KIND_SEVEN = 'seven'
export const KIND_EIGHT = 'eight'
export const KIND_NINE = 'nine'
export const KIND_TEN = 'ten'
export const KIND_JACK = 'jack'
export const KIND_QUEEN = 'queen'
export const KIND_KING = 'king'
export const KIND_ACE = 'ace'

export const VALUE_ACE_LOW = 1
export const VALUE_TWO = 2
export const VALUE_THREE = 3
export const VALUE_FOUR = 4
export const VALUE_FIVE = 5
export const VALUE_SIX = 6
export const VALUE_SEVEN = 7
export const VALUE_EIGHT = 8
export const VALUE_NINE = 9
export const VALUE_TEN = 10
export const VALUE_JACK = 10
export const VALUE_QUEEN = 10
export const VALUE_KING = 10
export const VALUE_ACE_HIGH = 11

export const SUIT_SPADE = 'spade'
export const SUIT_HEART = 'heart'
export const SUIT_DIAMOND = 'diamond'
export const SUIT_CLUBS = 'clubs'

export default class Card {
    Id: string
    Suit: string
    Kind: string

    constructor(suit: string, kind: string) {
        this.Id = uuidv4()
        this.Suit = suit
        this.Kind = kind
    }
}

export const Deck = [
    new Card(SUIT_CLUBS, KIND_ACE),
    new Card(SUIT_CLUBS, KIND_KING),
    new Card(SUIT_CLUBS, KIND_QUEEN),
    new Card(SUIT_CLUBS, KIND_JACK),
    new Card(SUIT_CLUBS, KIND_TEN),
    new Card(SUIT_CLUBS, KIND_NINE),
    new Card(SUIT_CLUBS, KIND_EIGHT),
    new Card(SUIT_CLUBS, KIND_SEVEN),
    new Card(SUIT_CLUBS, KIND_SIX),
    new Card(SUIT_CLUBS, KIND_FIVE),
    new Card(SUIT_CLUBS, KIND_FOUR),
    new Card(SUIT_CLUBS, KIND_THREE),
    new Card(SUIT_CLUBS, KIND_TWO),
    new Card(SUIT_DIAMOND, KIND_ACE),
    new Card(SUIT_DIAMOND, KIND_KING),
    new Card(SUIT_DIAMOND, KIND_QUEEN),
    new Card(SUIT_DIAMOND, KIND_JACK),
    new Card(SUIT_DIAMOND, KIND_TEN),
    new Card(SUIT_DIAMOND, KIND_NINE),
    new Card(SUIT_DIAMOND, KIND_EIGHT),
    new Card(SUIT_DIAMOND, KIND_SEVEN),
    new Card(SUIT_DIAMOND, KIND_SIX),
    new Card(SUIT_DIAMOND, KIND_FIVE),
    new Card(SUIT_DIAMOND, KIND_FOUR),
    new Card(SUIT_DIAMOND, KIND_THREE),
    new Card(SUIT_DIAMOND, KIND_TWO),
    new Card(SUIT_HEART, KIND_ACE),
    new Card(SUIT_HEART, KIND_KING),
    new Card(SUIT_HEART, KIND_QUEEN),
    new Card(SUIT_HEART, KIND_JACK),
    new Card(SUIT_HEART, KIND_TEN),
    new Card(SUIT_HEART, KIND_NINE),
    new Card(SUIT_HEART, KIND_EIGHT),
    new Card(SUIT_HEART, KIND_SEVEN),
    new Card(SUIT_HEART, KIND_SIX),
    new Card(SUIT_HEART, KIND_FIVE),
    new Card(SUIT_HEART, KIND_FOUR),
    new Card(SUIT_HEART, KIND_THREE),
    new Card(SUIT_HEART, KIND_TWO),
    new Card(SUIT_SPADE, KIND_ACE),
    new Card(SUIT_SPADE, KIND_KING),
    new Card(SUIT_SPADE, KIND_QUEEN),
    new Card(SUIT_SPADE, KIND_JACK),
    new Card(SUIT_SPADE, KIND_TEN),
    new Card(SUIT_SPADE, KIND_NINE),
    new Card(SUIT_SPADE, KIND_EIGHT),
    new Card(SUIT_SPADE, KIND_SEVEN),
    new Card(SUIT_SPADE, KIND_SIX),
    new Card(SUIT_SPADE, KIND_FIVE),
    new Card(SUIT_SPADE, KIND_FOUR),
    new Card(SUIT_SPADE, KIND_THREE),
    new Card(SUIT_SPADE, KIND_TWO),
]