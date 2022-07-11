import { v4 as uuidv4 } from 'uuid'
import Player from './player'
import Dealer from './dealer'
import Shoe from './shoe'

export default class Table {
  Id: string = uuidv4()
  CurrentPlayer: number = 0
  Shoe: Shoe = new Shoe()
  Dealer: Dealer = new Dealer()
  MaxBet: number = 5
  MinBet: number = 50
  Players: Player[] = []

  constructor() {
    this.Shoe.ShuffleAndLoad()
  }

  AddPlayer(player: Player): number {
    return this.Players.push(player)
  }

  DealToPlayers() {
    this.Players = this.Players.map(p => {
      for (let i = 0; i < 2; i++) {
        const card = this.Shoe.DrawCard()

        p.DealCard(card!)
      }

      return p
    })
  }

  ServeDealer() {
    const card = this.Shoe.DrawCard()

    this.Dealer.Hand.Deal(card!)
  }

  ServePlayer(playerId: string, hand: 0 | 1 = 0) {
    const player = this.GetPlayer(playerId)

    player!.Hands[hand].Deal(this.Shoe.DrawCard()!)

    this.UpdatePlayer(player!)
  }

  GetPlayer(id: string): Player | undefined {
    return this.Players.find(p => p.Id === id)
  }

  RemovePlayer(playerId: string) {
    this.Players = this.Players.filter(p => p.Id === playerId)
  }

  SettleBets() {
    this.Players = this.Players.map(p => {
      if (true) {
        p.Balance += p.CurrentBet
      }

      return p
    })
  }

  UpdatePlayer(player: Player) {
    const index = this.Players.findIndex(p => p.Id === player.Id)

    this.Players[index] = player
  }
}
