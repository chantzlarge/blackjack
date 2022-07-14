import { v4 as uuidv4 } from 'uuid'
import Dealer from './dealer'
import Shoe from './shoe'

enum State {
  Initial = 'initial',
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
  State: State = State.Initial

  constructor () {
    this.Shoe.ShuffleAndLoad()
  }
}
