import {
    ACE_OF_SPADES,
    TEN_OF_CLUBS,
    TWO_OF_DIAMONDS,
} from '../card/card'
import Hand, { State } from './hand'

describe('Hand', () => {
    describe('new', () => {
        test('SHOULD construct new instance of Hand', () => {
            // act
            const hand = new Hand()

            // assert
            expect(hand).toBeInstanceOf(Hand)
        })
    })

    describe('#Hit()', () => {
        test('SHOULD deal card to Hand', () => {
            // arrange
            const hand = new Hand()

            // act
            hand.Hit(ACE_OF_SPADES)

            // assert
            expect(hand.Cards).toEqual([ACE_OF_SPADES])
            expect(hand.State).toEqual(State.HIT)
        })

        test('SHOULD change Hand state to BUST after hand score exceeds 21', () => {
            // arrange
            const cards = [ACE_OF_SPADES, TEN_OF_CLUBS, TWO_OF_DIAMONDS]

            // act
            const hand = cards.reduce((h, c) => h.Hit(c), new Hand())

            // assert
            expect(hand.State).toEqual(State.BUST)
        })
    })

    describe('#Score()', () => {
        test('SHOULD return Hand score', () => {
            // arrange
            const cards = [ACE_OF_SPADES, TEN_OF_CLUBS]
            const hand = cards.reduce((h, c) => h.Hit(c), new Hand())

            // act
            const score = hand.Score()

            // assert
            expect(score).toEqual(21)
        })
    })

    describe('#Stand()', () => {
        test('SHOULD set Hand state to STAND', () => {
            // arrange
            const hand = new Hand()

            // act
            hand.Stand()

            // assert
            expect(hand.State).toEqual(State.STAND)
        })
    })
})