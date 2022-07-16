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

  constructor () {
    this.Shoe.Shuffle()
  }

  AddPlayer (player: Player): Promise<Table> {
    return new Promise((resolve) => {
      this.Players.push(player)

      resolve(this)
    })
  }

  Bet (playerId: string, amount: number): Promise<Table> {
    return new Promise(async (resolve, reject) => {
      if (this.State != State.AcceptingBets) {
        reject('table is not accepting bets')
      } else if (amount < this.MinBet) {
        reject('bet amount less than table minimum')
      } else if (amount > this.MaxBet) {
        reject('bet amount greater than table maximum')
      }

      this.Players.every(async p =>
        (p.Id === playerId) ? await p.Bet(amount).catch(reject) : p)

      resolve(this)
    })
  }

  BuyInsurance (playerId: string): Promise<Table> {
    return new Promise(async (resolve, reject) => {
      this.Players = await Promise.all(this.Players.map(async p =>
        (p.Id === playerId) ? await p.BuyInsurance() : p))

      resolve(this)
    })
  }

  Hit (playerId: string, handId: string): Promise<Table> {
    return new Promise(async (resolve, reject) => {
      this.Players = await Promise.all(this.Players.map(async p =>
        (p.Id === playerId) ? await p.Hit(handId, this.Shoe.Draw()) : p))

      resolve(this)
    })
  }

  GetPlayer (playerId: string): Promise<Player> {
    return new Promise((resolve, reject) => {
      const player = this.Players.find(p => p.Id === playerId)

      if (player != null) {
        resolve(player)
      }

      reject('player not found')
    })
  }

  RemovePlayer (playerId: string): Promise<Table> {
    return new Promise(async (resolve, reject) => {
      const player = await this.GetPlayer(playerId).catch(reject)

      if (player != null) {
        this.Players = this.Players.filter(p => p.Id !== player.Id)
      }

      resolve(this)
    })
  }

  Sit (playerId: string): Promise<Table> {
    return new Promise(async (resolve, reject) => {
      const player = await this.GetPlayer(playerId).catch(reject)

      if (player != null) {
        this.Players = await Promise.all(this.Players.map(async (p) =>
          (p.Id === player.Id) ? await p.Sit() : p))
      }

      resolve(this)
    })
  }
}
