import { v4 as uuidv4 } from 'uuid'
import Dealer from '../dealer/dealer'
import Hand from '../hand/hand'
import Player from '../player/player'
import Shoe from '../shoe/shoe'

export default class Table {
  readonly id: string
  readonly dealer: Dealer
  readonly bet: {
    max: number
    min: number
  }
  readonly isAcceptingBets: boolean = false
  readonly isDealingToPlayers: boolean = false
  readonly isDealingToDealer: boolean = false
  readonly isAcceptingInsurance: boolean = false
  readonly isPayingInsurance: boolean = false
  readonly isPayingNaturals: boolean = false
  readonly isPlayerTurn: boolean = false
  readonly isDealerTurn: boolean = false
  readonly isPayingBets: boolean = false
  readonly players: Player[]
  readonly shoe: Shoe

  constructor(
    id: string = uuidv4(),
    dealer: Dealer = new Dealer(),
    bet: {
      max: number,
      min: number,
    } = {
        max: 500,
        min: 5
      },
    players: Player[] = [],
    shoe: Shoe = new Shoe().Shuffle(),
  ) {
    this.id = id
    this.dealer = dealer
    this.bet = bet
    this.players = players
    this.shoe = shoe
    this.isAcceptingBets = this.players.reduce((p, c) => (p) && (!c.isSitting && c.bet === 0) && (c.hands.length === 0), true)
    this.isDealingToPlayers = this.players.reduce((p, c) => p && c.hands.length < 1, true)

    if (this.isDealingToPlayers) {
      this.players = this.players.map(p => {
        const [c0, s0] = this.shoe.Draw()
        const [c1, s1] = s0.Draw()
        const hand = new Hand([c0, c1], false, false)

        return new Player(p.id, p.balance, p.bet, [hand], false, false)
      })
    }
  }

  AddPlayer(player: Player): Table {
    return new Table(
      this.id,
      this.dealer,
      this.bet,
      [...this.players, player],
      this.shoe,
    )
  }

  Bet(playerId: string, amount: number): Table {
    const player = this.GetPlayer(playerId)

    if (amount > this.bet.max) {
      throw new Error('bet is greater than table maximum')
    } else if (amount < this.bet.min) {
      throw new Error('bet is less than table minimum')
    }

    return new Table(
      this.id,
      this.dealer,
      this.bet,
      this.players.map(p => p.id === player.id ? p.Bet(amount) : p),
      this.shoe,
    )
  }

  GetCurrentPlayer(): Player {
    const player = this.players.find(p => !p.isSitting && p.hands.reduce((p, c) => p && (!c.isBusted && !c.isStanding), true))

    if (!player) {
      throw new Error('table has no current player')
    }

    return player
  }

  GetPlayer(playerId: string): Player {
    const player = this.players.find(p => p.id === playerId)

    if (!player) {
      throw new Error('player not found')
    }

    return player
  }

  Hit(playerId: string): Table {
    const player = this.GetPlayer(playerId)
    const currentPlayer = this.GetCurrentPlayer()

    if (currentPlayer.id !== player.id) {
      throw new Error('current player doesn\'t match identified player')
    }

    const [card, shoe] = this.shoe.Draw()

    return new Table(
      this.id,
      this.dealer,
      this.bet,
      this.players.map(p => p.id === playerId ? p.Hit(card) : p),
      shoe,
    )
  }

  RemovePlayer(playerId: string): Table {
    return new Table(
      this.id,
      this.dealer,
      this.bet,
      this.players.filter(p => p.id !== playerId),
      this.shoe,
    )
  }

  Sit(playerId: string): Table {
    const player = this.GetPlayer(playerId)

    return new Table(
      this.id,
      this.dealer,
      this.bet,
      this.players.map(p => p.id === player.id ? p.Sit() : p),
      this.shoe,
    )
  }

  Stand(playerId: string): Table {
    const player = this.GetPlayer(playerId)
    const currentPlayer = this.GetCurrentPlayer()

    if (currentPlayer.id !== player.id) {
      throw new Error('current player doesn\'t match identified player')
    }

    const [card, shoe] = this.shoe.Draw()

    return new Table(
      this.id,
      this.dealer,
      this.bet,
      this.players.map(p => p.id === player.id ? p.Stand() : p),
      this.shoe,
    )
  }
}
