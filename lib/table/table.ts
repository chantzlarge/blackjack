import Card, { Value } from '../card/card'
import { v4 as uuidv4 } from 'uuid'
import Dealer from '../dealer/dealer'
import Player from '../player/player'
import Shoe from '../shoe/shoe'
import Hand from '../hand/hand'

export const enum State {
  ACCEPTING_BETS = 'ACCEPTING_BETS',
  DEALING_TO_PLAYERS = 'DEALING_TO_PLAYERS',
  DEALING_TO_DEALER = 'DEALING_TO_DEALER',
  ACCEPTING_INSURANCE = 'ACCEPTING_INSURANCE',
  PAYING_INSURANCE = 'PAYING_INSURANCE',
  PAYING_NATURALS = 'PAYING_NATUALS',
  PLAYER_TURNS = 'PLAYER_TURNS',
  DEALER_TURN = 'DEALER_TURN',
  PAYING_BETS = 'PAYING_BETS',
}

export default class Table {
  readonly id: string
  readonly dealer: Dealer
  readonly bet: {
    max: number
    min: number
  }

  readonly code: string
  readonly players: Player[]
  shoe: Shoe
  readonly state: State = State.ACCEPTING_BETS

  constructor (
    id: string = uuidv4(),
    dealer: Dealer = new Dealer(),
    bet: {
      max: number
      min: number
    } = {
      max: 500,
      min: 5
    },
    code: string = (Math.floor(Math.random() * 1000)).toString(16),
    players: Player[] = [],
    shoe: Shoe = new Shoe().Shuffle(),
    state: State = State.ACCEPTING_BETS
  ) {
    this.id = id
    this.dealer = dealer
    this.bet = bet
    this.code = code
    this.players = players
    this.shoe = shoe

    switch (state) {
      case State.ACCEPTING_BETS:
        this.state = State.ACCEPTING_BETS

        const hasAllPlayersBetOrSit = this.players.every(p => !p.isSitting && p.bet === 0)

        if (hasAllPlayersBetOrSit) {
          break
        }
      case State.DEALING_TO_PLAYERS:
        this.state = State.DEALING_TO_PLAYERS

        this.players = this.players.map(p => {
          const [c0, s0] = this.shoe.Draw()
          const [c1, s1] = s0.Draw()

          this.shoe = s1

          const hand = new Hand([c0, c1], false, false)

          return new Player(p.id, p.balance, p.bet, [hand], false, false, false)
        })
      case State.DEALING_TO_DEALER:
        this.state = State.DEALING_TO_DEALER

        const [c0, s0] = this.shoe.Draw()
        const [c1, s1] = s0.Draw()

        const hand = new Hand().Hit(c0).Hit(c1)

        this.dealer = new Dealer(hand)
        this.shoe = s1
      case State.ACCEPTING_INSURANCE:
        this.state = State.ACCEPTING_INSURANCE

        if (
          (this.dealer.hand.cards.length == 2) &&
          ((this.dealer.hand.cards[1].value === Value.ELEVEN) || (this.dealer.hand.cards[1].value === Value.TEN)) &&
          (this.players.every(p => !p.hasDeclinedInsurance && !p.hasInsurance))
        ) {
          break
        }
      case State.PAYING_INSURANCE:
        this.state = State.PAYING_INSURANCE

        if ((this.dealer.hand.Score() === 21)) {
          this.dealer = new Dealer()
          this.players = this.players.map(p => p.hasInsurance ? p.Pay(0.5 * p.bet) : p).map(p => new Player(p.id, p.balance, 0, [], false, false, false))
          this.state = State.ACCEPTING_BETS
          break
        }
      case State.PAYING_NATURALS:
        this.state = State.PAYING_NATURALS
        this.players = this.players.map(p => {
          const amount = p.hands.reduce((amount, hand) => hand.Score() === 21 ? (2.5 * p.bet) + amount : amount, 0)
          const hands = p.hands.filter(h => h.Score() !== 21)

          return new Player(p.id, p.balance + amount, p.bet, hands, p.hasDeclinedInsurance, p.hasInsurance, hands.length === 0)
        })
      case State.PLAYER_TURNS:
        this.state = State.PLAYER_TURNS
        const isDealerTurn = this.players.every(p => p.isSitting || p.hands.every(h => h.isBusted || h.isStanding))

        if (!isDealerTurn) {
          break
        }
      case State.DEALER_TURN:
        this.state = State.DEALER_TURN

        while (!this.dealer.hand.isBusted && this.dealer.hand.Score() < 17) {
          const [c, s] = this.shoe.Draw()
          const hand = this.dealer.hand.Hit(c)

          this.dealer = new Dealer(hand)
        }
      case State.PAYING_BETS:
        this.state = State.ACCEPTING_BETS
        this.players = this.players.map(p => {
          const amount = p.hands.reduce((amount, hand) => {
            if (this.dealer.hand.isBusted || (this.dealer.hand.Score() < hand.Score())) {
              return 2 * p.bet + amount
            } else if (this.dealer.hand.Score() === hand.Score()) {
              return p.bet + amount
            } else {
              return amount
            }
          }, 0)

          return p.Pay(amount)
        }).map(p => new Player(p.id, p.balance, 0, [], false, false, false))

        this.dealer = new Dealer()
    }
  }

  AddPlayer (player: Player): Table {
    return new Table(
      this.id,
      this.dealer,
      this.bet,
      this.code,
      [...this.players, player],
      this.shoe,
      this.state
    )
  }

  Bet (playerId: string, amount: number): Table {
    if (this.state != State.ACCEPTING_BETS) {
      throw new Error('invalid operation')
    }

    const player = this.GetPlayer(playerId)

    if (amount > this.bet.max) {
      throw new Error('bet is greater than table maximum')
    } else if (amount < this.bet.min) {
      throw new Error('bet is less than table minimum')
    }

    const players = this.players.map(p => p.id === player.id ? p.Bet(amount) : p)

    return new Table(
      this.id,
      this.dealer,
      this.bet,
      this.code,
      players,
      this.shoe,
      this.state
    )
  }

  BuyInsurance (playerId: string): Table {
    if (this.state != State.ACCEPTING_INSURANCE) {
      throw new Error('invalid operation')
    }

    const player = this.GetPlayer(playerId)

    const players = this.players.map(p => p.id === player.id ? p.BuyInsurance() : p)

    return new Table(
      this.id,
      this.dealer,
      this.bet,
      this.code,
      players,
      this.shoe,
      this.state
    )
  }

  DeclineInsurance (playerId: string): Table {
    if (this.state != State.ACCEPTING_INSURANCE) {
      throw new Error('invalid operation')
    }

    const player = this.GetPlayer(playerId)

    const players = this.players.map(p => p.id === player.id ? p.DeclineInsurance() : p)

    return new Table(
      this.id,
      this.dealer,
      this.bet,
      this.code,
      players,
      this.shoe,
      this.state
    )
  }

  GetCurrentPlayer (): Player {
    const player = this.players.find(p => !p.isSitting && p.hands.every(h => !h.isBusted && !h.isStanding))

    if (player == null) {
      throw new Error('table has no current player')
    }

    return player
  }

  GetPlayer (playerId: string): Player {
    const player = this.players.find(p => p.id === playerId)

    if (player == null) {
      throw new Error('player not found')
    }

    return player
  }

  Hit (playerId: string): Table {
    if (this.state != State.PLAYER_TURNS) {
      throw new Error('invalid operation')
    }

    const player = this.GetPlayer(playerId)
    const currentPlayer = this.GetCurrentPlayer()

    if (currentPlayer.id !== player.id) {
      throw new Error('current player doesn\'t match identified player')
    }

    const [card, shoe] = this.shoe.Draw()

    const players = this.players.map(p => p.id === playerId ? p.Hit(card) : p)

    return new Table(
      this.id,
      this.dealer,
      this.bet,
      this.code,
      players,
      shoe,
      this.state
    )
  }

  RemovePlayer (playerId: string): Table {
    return new Table(
      this.id,
      this.dealer,
      this.bet,
      this.code,
      this.players.filter(p => p.id !== playerId),
      this.shoe,
      this.state
    )
  }

  Sit (playerId: string): Table {
    if (this.state != State.ACCEPTING_BETS) {
      throw new Error('invalid operation')
    }

    const player = this.GetPlayer(playerId)

    return new Table(
      this.id,
      this.dealer,
      this.bet,
      this.code,
      this.players.map(p => p.id === player.id ? p.Sit() : p),
      this.shoe,
      this.state
    )
  }

  Stand (playerId: string): Table {
    if (this.state != State.PLAYER_TURNS) {
      throw new Error('invalid operation')
    }

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
      this.code,
      this.players.map(p => p.id === player.id ? p.Stand() : p),
      this.shoe,
      this.state
    )
  }
}
