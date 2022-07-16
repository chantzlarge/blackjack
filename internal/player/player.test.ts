import Player from './player'
import { State } from './player'

describe('Player', () => {
    describe('new', () => {
        test('SHOULD construct new instance of Player', () => {
            // act
            const player = new Player()

            // assert
            expect(player).toBeInstanceOf(Player)
        })
    })

    describe('#Play()', () => {
        test('SHOULD set state of player to playing', () => {
            // arrange
            const player = new Player()

            // act
            player.Play()
            // assert
            expect(player.State).toEqual(State.PLAYING)
        })
    })

    describe('#Sit()', () => {
        test('SHOULD set state of player to sitting', () => {
            // arrange
            const player = new Player()

            // arrange
            player.Sit()

            // assert
            expect(player.State).toEqual(State.SITTING)
        })
    })
})