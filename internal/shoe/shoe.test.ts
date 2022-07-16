import Shoe from './shoe'

describe('Shoe', () => {
    describe('new', () => {
        test('SHOULD create new shoe', () => {
            const shoe = new Shoe()

            expect(shoe).toBeInstanceOf(Shoe)
        })
    })

    describe('#Draw()', () => {
        test('SHOULD draw card from shoe', () => {
            const shoe = new Shoe()
            const card = shoe.Draw()

            expect(card).toBeDefined()
        })
    })

    describe('#Remaining()', () => {
        test('SHOULD draw card from shoe', () => {
            const shoe = new Shoe()
            const remaining = shoe.Remaining()

            expect(remaining).toBe(52 * 6)
        })
    })

    describe('#Shuffle()', () => {
        test('SHOULD shuffle shoe', () => {
            const shoe = new Shoe()
            shoe.Shuffle()

            expect(shoe).toBeDefined()
        })
    })
})