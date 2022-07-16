import Dealer from './dealer'

describe('Dealer', () => {
  describe('new Dealer()', () => {
    test('SHOULD construct new instance of Dealer', () => {
      const dealer = new Dealer()

      expect(dealer).toBeInstanceOf(Dealer)
    })
  })
})
