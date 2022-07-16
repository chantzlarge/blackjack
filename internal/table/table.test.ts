import Player, { State as PlayerState } from '../player/player'
import Table, { State as TableState } from './table'

describe('Table', () => {
    describe('new', () => {
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
                .then(value => expect(value).toBeInstanceOf(Table))
                .catch(reason => expect(reason).toBeUndefined())
        })
    })

    describe('#Bet()', () => {
        test('SHOULD place bet', async () => {
            const player = new Player()
            const table = new Table()
            await table.AddPlayer(player)

            table.Bet(player.Id, 50)
                .then(value => {
                    const p = value.Players.find(p => p.Id === player.Id)

                    expect(p).toBeInstanceOf(Player)
                    expect(p?.CurrentBet).toEqual(50)
                    expect(p?.State).toEqual(PlayerState.PLAYING)
                })
                .catch(reason => expect(reason).toBeUndefined())
        })

        test('SHOULD NOT place bet due to invalid table state', async () => {
            const player = new Player()
            const table = new Table()
            await table.AddPlayer(player)

            table.State = TableState.DealerTurn

            table.Bet(player.Id, 50)
                .then(value => expect(value).toBeUndefined())
                .catch(reason => expect(reason).toEqual('table is not accepting bets'))
        })

        test('SHOULD NOT place bet due to bet amount being less than table minimum', async () => {
            const player = new Player()
            const table = new Table()
            await table.AddPlayer(player)

            table.Bet(player.Id, 0)
                .then(value => expect(value).toBeUndefined())
                .catch(reason => expect(reason).toEqual('bet amount less than table minimum'))
        })

        test('SHOULD NOT place bet due to bet amount being greater than table maximum', async () => {
            const player = new Player()
            const table = new Table()
            await table.AddPlayer(player)

            table.Bet(player.Id, 1000)
                .then(value => expect(value).toBeUndefined())
                .catch(reason => expect(reason).toEqual('bet amount greater than table maximum'))
        })
    })

    describe('#RemovePlayer()', () => {
        test('SHOULD remove player from table', async () => {
            const player = new Player()
            const table = new Table()
            await table.AddPlayer(player)

            table.RemovePlayer(player.Id)
                .then(value => expect(value).toBeInstanceOf(Table))
                .catch(reason => expect(reason).toBeUndefined())
        })
    })
})