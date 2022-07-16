import Player from './player'

describe('Player', () => {
    describe('new', () => {
        test('SHOULD construct new instance of Player', () => {
            const player = new Player()

            expect(player).toBeInstanceOf(Player)
        })
    })
})