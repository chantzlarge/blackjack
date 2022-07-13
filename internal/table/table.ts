import { v4 as uuidv4 } from 'uuid'
import Player from './player'
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
  Players: Player[] = []
  State: State = State.Initial

  constructor () {
    this.Shoe.ShuffleAndLoad()
  }

  AddPlayer (player: Player): number {
    return this.Players.push(player)
  }

  NextPlayer () {
    this.CurrentPlayer += 1
    if (this.CurrentPlayer >= this.Players.length) {
      this.CurrentPlayer = 0
    }
  }

  DealCardToPlayer (playerId: string) {
    this.Players = this.Players.map(p => p.Id === playerId ? p.DealCard(this.Shoe.DrawCard()!) : p)
  }

  ServeDealer () {
    const card = this.Shoe.DrawCard()

    this.Dealer.Hand.Deal(card!)
  }

  ServePlayer (playerId: string, hand: 0 | 1 = 0) {
    const player = this.GetPlayer(playerId)

    player!.Hands[hand].Deal(this.Shoe.DrawCard()!)

    this.UpdatePlayer(player!)
  }

  GetPlayer (id: string): Player | undefined {
    return this.Players.find(p => p.Id === id)
  }

  RemovePlayer (playerId: string) {
    this.Players = this.Players.filter(p => p.Id === playerId)
  }

  SettleBets () {
    this.Players = this.Players.map(p => {
      if (true) {
        p.Balance += p.CurrentBet
      }

      return p
    })
  }

  UpdatePlayer (player: Player) {
    this.Players = this.Players.map(p => p.Id === player.Id ? player : p)
  }
}
