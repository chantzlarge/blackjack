import Deck from "./deck"

describe('Deck', () => {
    describe('new', () => {
        test('SHOULD construct new instance of Deck', () => {
            // act
            const deck = new Deck()
            
            // assert
            expect(deck).toBeInstanceOf(Deck)
        })
    })
})