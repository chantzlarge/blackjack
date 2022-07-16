import Dealer from './dealer'

describe('Dealer', () => {
    describe('new', () => {
        test('SHOULD construct new instance of Dealer', () => {
            // act
            const dealer = new Dealer()
            
            // assert
            expect(dealer).toBeInstanceOf(Dealer)
        })
    })
})