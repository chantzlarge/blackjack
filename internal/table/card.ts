import { v4 as uuidv4 } from 'uuid'

export const SUIT_CLUBS = 'clubs'
export const SUIT_DIAMOND = 'diamond'
export const SUIT_HEART = 'heart'
export const SUIT_SPADE = 'spade'
export const KIND_ACE = 'ace'
export const KIND_KING = 'king'
export const KIND_QUEEN = 'queen'
export const KIND_JACK = 'jack'
export const KIND_NINE = 'nine'
export const KIND_EIGHT = 'eight'
export const KIND_TEN = 'ten'
export const KIND_SEVEN = 'seven'
export const KIND_SIX = 'six'
export const KIND_FIVE = 'five'
export const KIND_FOUR = 'four'
export const KIND_THREE = 'three'
export const KIND_TWO = 'two'

export default class Card {
  Id: string = uuidv4()
  Suit: string
  Kind: string

  constructor (suit: 'spade' | 'heart' | 'diamond' | 'clubs', kind: 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine' | 'ten' | 'jack' | 'queen' | 'king' | 'ace') {
    this.Suit = suit
    this.Kind = kind
  }
}
