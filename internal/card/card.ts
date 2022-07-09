import { v4 as uuidv4 } from 'uuid'

export const SUIT_CLUBS = 'clubs'
export const SUIT_DIAMOND = 'diamond'
export const SUIT_HEART = 'heart'
export const SUIT_SPADE = 'spade'
export const VALUE_ACE = 'ace'
export const VALUE_KING = 'king'
export const VALUE_QUEEN = 'queen'
export const VALUE_JACK = 'jack'
export const VALUE_NINE = 'nine'
export const VALUE_EIGHT = 'eight'
export const VALUE_TEN = 'ten'
export const VALUE_SEVEN = 'seven'
export const VALUE_SIX = 'six'
export const VALUE_FIVE = 'five'
export const VALUE_FOUR = 'four'
export const VALUE_THREE = 'three'
export const VALUE_TWO = 'two'

export default class Card {
  Id: string = uuidv4()
  Suit: string
  Value: string

  constructor (suit: 'spade' | 'heart' | 'diamond' | 'clubs', value: 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine' | 'ten' | 'jack' | 'queen' | 'king' | 'ace') {
    this.Suit = suit
    this.Value = value
  }
}
