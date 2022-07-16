import Deck from './deck'

describe('Deck', () => {
  describe('new Deck()', () => {
    test('SHOULD construct new instance of Deck', () => {
      const deck = new Deck()

      expect(deck).toBeInstanceOf(Deck)
    })
  })
})
