import { v4 as uuidv4 } from 'uuid'
import Dealer from '../dealer/dealer'
import Player, { State as PlayerState } from '../player/player'
import Shoe from '../shoe/shoe'

export const enum State {
  AcceptingBets = 'accepting_bets',
  DealingToPlayers = 'dealing_to_players',
  DealingToDealer = 'dealing_to_dealer',
  BuyingInsurance = 'buying_insurance',
  PayingNaturals = 'paying_naturals',
  PlayerTurn = 'player_turn',
  DealerTurn = 'dealer_turn',
  SettlingBets = 'settling_bets',
}

export default class Table {
  Id: string = uuidv4()
  CurrentPlayer!: Player
  Dealer: Dealer = new Dealer()
  MaxBet: number = 250
  MinBet: number = 5
  Players: Player[] = []
  Shoe: Shoe = new Shoe()
  State: State = State.AcceptingBets

  constructor() {
    this.Shoe.Shuffle()
  }

  AddPlayer(player: Player): Promise<Table> {
    return new Promise((resolve) => {
      this.Players.push(player)

      resolve(this)
    })
  }

  Bet(playerId: string, betAmount: number): Promise<Table> {
    return new Promise((resolve, reject) => {
      if (this.State != State.AcceptingBets) {
        reject("table is not accepting bets")
      }

      if (betAmount < this.MinBet) {
        reject("bet amount less than table minimum")
      } else if (betAmount > this.MaxBet) {
        reject("bet amount greater than table maximum")
      }

      const player = this.Players.find(p => p.Id === playerId)

      if (!player) {
        reject("player not found")
      } else {
        if (betAmount > player.Balance) {
          reject("bet amount greater than player balance")
        }

        player.PreviousBet = player.CurrentBet
        player.CurrentBet = betAmount
        player.Balance -= betAmount
        player.Play()

        this.Players = this.Players.map(p => p.Id === playerId ? player : p)
      }

      this.State = this.Players.findIndex(p => (p.State !== PlayerState.SITTING) && (p.CurrentBet !== 0)) === -1 ? State.DealingToPlayers : State.AcceptingBets

      resolve(this)
    })
  }

  GetPlayer(playerId: string): Promise<Player> {
    return new Promise((resolve, reject) => {
      const player = this.Players.find(p => p.Id === playerId)

      if (player) {
        resolve(player)
      }

      reject('player not found')
    })
  }

  RemovePlayer(playerId: string): Promise<Table> {
    return new Promise((resolve) => {
      this.Players = this.Players.filter(p => p.Id !== playerId)

      resolve(this)
    })
  }

  Sit(playerId: string): Promise<Table> {
    return new Promise((resolve, reject) => {
      const player = this.Players.find(p => p.Id === playerId)

      if (player) {
        player.Sit()

        this.Players = this.Players.map(p => p.Id === player.Id ? player : p)
        
        resolve(this)
      }

      reject('player not found')
    })
  }
}
