import { v4 as uuidv4 } from 'uuid'
import Player from '../player/player'
import Dealer from '../dealer/dealer'
import Shoe from '../shoe/shoe'

export default class Table {
  Id: string = uuidv4()
  CurrentPlayer!: number
  Shoe: Shoe = new Shoe()
  Dealer: Dealer = new Dealer()
  MaxBet: number = 5
  MinBet: number = 50
  Players: Player[] = []

  constructor () {
    this.Shoe.ShuffleAndLoad()
  }

  AddPlayer (player: Player) {
    const i = this.Players.findIndex(p => p.Id === player.Id)
    i === -1 ? this.Players.push(player) : this.Players[i] = player
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

  GetPlayer (id?: string, sessionId?: string): Player | undefined {
    return this.Players.find(p => p.Id === id || p.SessionId === sessionId)
  }

  RemovePlayer (playerId: string) {
    this.Players = this.Players.filter(p => p.Id === playerId)
  }

  Settle () {
    this.Players = this.Players.map(p => {
      if (true) {
        p.Balance += p.CurrentBet
      }

      return p
    })
  }

  UpdatePlayer (player: Player) {
    const i = this.Players.findIndex(p => p.Id === player.Id)
    if (i === -1) {
      throw new Error('')
    } else {
      this.Players[i] = player
    }
  }
}
