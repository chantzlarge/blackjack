import Player, { State as PlayerState } from '../player/player'
import Table, { State as TableState } from './table'

describe('Table', () => {
  describe('new Table()', () => {
    test('SHOULD construct new instance of Table', () => {
      const table = new Table()

      expect(table).toBeInstanceOf(Table)
    })
  })

  describe('#AddPlayer()', () => {
    test('SHOULD add player to table', async () => {
      const player = new Player()
      const table = new Table()

      table.AddPlayer(player)
        .then(async t => await t.GetPlayer(player.Id))
        .then(p => expect(p).toBeInstanceOf(Player))
        .catch(r => expect(r).toBeUndefined())
    })
  })

  describe('#Bet()', () => {
    test('SHOULD place bet', async () => {
      const player = new Player()
      const table = new Table()
      await table.AddPlayer(player)

      table.Bet(player.Id, 50)
        .then(async t => await t.GetPlayer(player.Id))
        .then(p => {
          expect(p).toBeInstanceOf(Player)
          expect(p.CurrentBet).toEqual(50)
          expect(p.State).toEqual(PlayerState.PLAYING)
        })
        .catch(r => expect(r).toBeUndefined())
    })

    test('SHOULD NOT place bet due to invalid table state', async () => {
      const player = new Player()
      const table = new Table()
      await table.AddPlayer(player)

      table.State = TableState.DealerTurn

      table.Bet(player.Id, 50)
        .then(t => expect(t).toBeUndefined())
        .catch(r => expect(r).toEqual('table is not accepting bets'))
    })

    test('SHOULD NOT place bet due to bet amount being less than table minimum', async () => {
      const player = new Player()
      const table = new Table()
      await table.AddPlayer(player)

      table.Bet(player.Id, 0)
        .then(t => expect(t).toBeUndefined())
        .catch(r => expect(r).toEqual('bet amount less than table minimum'))
    })

    test('SHOULD NOT place bet due to bet amount being greater than table maximum', async () => {
      const player = new Player()
      const table = new Table()
      await table.AddPlayer(player)

      table.Bet(player.Id, 1000)
        .then(t => expect(t).toBeUndefined())
        .catch(r => expect(r).toEqual('bet amount greater than table maximum'))
    })
  })

  describe('#BuyInsurance()', () => {
    test('SHOULD buy insurance for players', async () => {
      const player = new Player()
      const table = new Table()
      await table.AddPlayer(player)

      table.BuyInsurance(player.Id)
        .then(async t => await t.GetPlayer(player.Id))
        .then(p => {
          expect(p).toBeInstanceOf(Player)
          expect(p.HasInsurance).toEqual(true)
        })
        .catch(r => expect(r).toBeUndefined())
    })
  })

  describe('#GetPlayer()', () => {
    test('SHOULD get player from table', async () => {
      const player = new Player()
      const table = new Table()
      await table.AddPlayer(player)

      table.GetPlayer(player.Id)
        .then(t => expect(t).toEqual(player))
        .catch(r => expect(r).toBeUndefined())
    })

    test('SHOULD NOT get player from table if player doesn\'t exist', async () => {
      const player = new Player()
      const table = new Table()
      await table.AddPlayer(player)

      table.GetPlayer('invalid id')
        .then(t => expect(t).toBeUndefined())
        .catch(r => expect(r).toEqual('player not found'))
    })
  })

  describe('#RemovePlayer()', () => {
    test('SHOULD remove player from table', async () => {
      const player = new Player()
      const table = new Table()
      await table.AddPlayer(player)

      table.RemovePlayer(player.Id)
        .then(t => expect(t.Players).toEqual([]))
        .catch(r => expect(r).toBeUndefined())
    })
  })

  describe('#Sit()', () => {
    test('SHOULD set player state to sit', async () => {
      const player = new Player()
      const table = new Table()
      await table.AddPlayer(player)

      table.Sit(player.Id)
        .then(async t => await t.GetPlayer(player.Id))
        .then(p => expect(p?.State).toEqual(PlayerState.SITTING))
        .catch(r => expect(r).toBeUndefined())
    })
  })
})
