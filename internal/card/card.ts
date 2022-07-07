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