import { v4 as uuidv4 } from 'uuid'

export const enum Suit {
  Clubs = 'clubs',
  Diamond = 'clubs',
  Heart = 'heart',
  Spade = 'spade',
}

export const enum Kind {
  Ace = 'ace',
  King = 'king',
  Queen = 'queen',
  Jack = 'jack',
  Nine = 'nine',
  Eight = 'eight',
  Ten = 'ten',
  Seven = 'seven',
  Six = 'six',
  Five = 'five',
  Four = 'four',
  Three = 'three',
  Two = 'two',
}

export default class Card {
  Id: string = uuidv4()
  Suit: Suit
  Kind: Kind

  constructor (suit: Suit, kind: Kind) {
    this.Suit = suit
    this.Kind = kind
  }
}
