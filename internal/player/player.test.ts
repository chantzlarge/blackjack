import Player, { State } from './player'

describe('Player', () => {
  describe('new Player()', () => {
    test('SHOULD construct new instance of Player', () => {
      const player = new Player()

      expect(player).toBeInstanceOf(Player)
    })
  })

  describe('#BuyInsurance()', () => {
    test('SHOULD indicate player has insurance and deduct 1/2 of current bet from balance', () => {
      const player = new Player()

      player.BuyInsurance()

      expect(player.HasInsurance).toEqual(true)
    })
  })

  describe('#Play()', () => {
    test('SHOULD set state of player to playing', () => {
      const player = new Player()

      player.Play()

      expect(player.State).toEqual(State.PLAYING)
    })
  })

  describe('#Sit()', () => {
    test('SHOULD set state of player to sitting', () => {
      const player = new Player()

      player.Sit()

      expect(player.State).toEqual(State.SITTING)
    })
  })
})
