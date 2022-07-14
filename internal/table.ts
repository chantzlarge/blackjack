import { v4 as uuidv4 } from 'uuid'
import Dealer from './dealer'
import Player from './player'
import Shoe from './shoe'

export const enum State {
  PlacingBets = 'placing_bets',
  BuyingInsurance = 'buying_insurance',
  PayingNaturals = 'paying_naturals',
  DealingToPlayers = 'dealing_to_players',
  DealingToDealer = 'dealing_to_dealer',
  SettlingBets = 'settling_bets',
}

export default class Table {
  Id: string = uuidv4()
  CurrentPlayer: number = 0
  Shoe: Shoe = new Shoe()
  Dealer: Dealer = new Dealer()
  MaxBet: number = 5
  MinBet: number = 50
  Players: Player[] = []
  State: State = State.PlacingBets

  constructor () {
    this.Shoe.ShuffleAndLoad()
  }
}
