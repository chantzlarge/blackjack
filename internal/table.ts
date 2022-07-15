import { v4 as uuidv4 } from 'uuid'
import Dealer from './dealer'
import Player from './player'
import Shoe from './shoe'

export const enum State {
  PlacingBets = 'placing_bets',
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
  CurrentPlayer: number = 0
  Shoe: Shoe = new Shoe()
  Dealer: Dealer = new Dealer()
  MaxBet: number = 250
  MinBet: number = 5
  Players: Player[] = []
  State: State = State.PlacingBets

  constructor () {
    this.Shoe.ShuffleCards()
  }
}
