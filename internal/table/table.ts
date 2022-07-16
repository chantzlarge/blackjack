import { v4 as uuidv4 } from 'uuid'
import Dealer from '../dealer/dealer'
import Player from '../player/player'
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

  AddPlayer(player: Player): Table {
    this.Players.push(player)
    
    return this
  }

  PlaceBet(playerId: string, betAmount: number): Table | Error {
    if (betAmount < this.MinBet) {
      return Error("bet amount less than table minimum")
    } else if (betAmount > this.MaxBet) {
      return Error("bet amount greater than table maximum")
    }

    const player = this.Players.find(p => p.Id === playerId)

    if (!player) {
      return Error("player not found")
    }
    
    if (betAmount > player.Balance) {
      return Error("bet amount greater than player balance")
    }

    player.PreviousBet = player.CurrentBet
    player.CurrentBet = betAmount
    player.Balance -= betAmount

    this.Players = this.Players.map(p => p.Id === playerId ? player : p)

    return this
  }

  RemovePlayer(player: Player): Table {
    this.Players = this.Players.filter(p => p.Id !== player.Id)
    
    return this
  }
}
