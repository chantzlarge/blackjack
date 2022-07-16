import {
  ACE_OF_SPADES,
  TEN_OF_CLUBS,
  TWO_OF_DIAMONDS
} from '../card/card'
import Hand, { State } from './hand'

describe('Hand', () => {
  describe('new Hand()', () => {
    test('SHOULD construct new instance of Hand', () => {
      const hand = new Hand()

      expect(hand).toBeInstanceOf(Hand)
    })
  })

  describe('#Deal()', () => {
    test('SHOULD deal card to Hand', () => {
      const hand = new Hand()

      hand.Deal(ACE_OF_SPADES)

      expect(hand.Cards).toEqual([ACE_OF_SPADES])
      expect(hand.State).toEqual(State.HIT)
    })

    test('SHOULD change Hand state to BUST after hand score exceeds 21', () => {
      const cards = [ACE_OF_SPADES, TEN_OF_CLUBS, TWO_OF_DIAMONDS]
      const hand = cards.reduce((h, c) => h.Deal(c), new Hand())

      expect(hand.State).toEqual(State.BUST)
    })
  })

  describe('#Score()', () => {
    test('SHOULD return Hand score', () => {
      const cards = [ACE_OF_SPADES, TEN_OF_CLUBS]
      const hand = cards.reduce((h, c) => h.Deal(c), new Hand())
      const score = hand.Score()

      expect(score).toEqual(21)
    })
  })

  describe('#Stand()', () => {
    test('SHOULD set Hand state to STAND', () => {
      const hand = new Hand()

      hand.Stand()

      expect(hand.State).toEqual(State.STAND)
    })
  })
})
