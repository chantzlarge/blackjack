import { v4 as uuidv4 } from 'uuid'
import Card, {
  SUIT_CLUBS,
  SUIT_DIAMOND,
  SUIT_HEART,
  SUIT_SPADE,
  KIND_TWO,
  KIND_THREE,
  KIND_FOUR,
  KIND_FIVE,
  KIND_SIX,
  KIND_SEVEN,
  KIND_EIGHT,
  KIND_NINE,
  KIND_TEN,
  KIND_JACK,
  KIND_QUEEN,
  KIND_KING,
  KIND_ACE,
  Deck,
} from '../card/card'
import Player from '../player/player'

export default class Table {
  Id!: string
  Shoe: Card[] = []
  DealerHand: Card[] = []
  Players: Player[] = []
  MaxBet: number = 5
  MinBet: number = 50

  constructor() {
    this.Id = uuidv4()

    this.Shuffle()
  }

  AddPlayer(player: Player) {
    const i = this.Players.findIndex(p => p.Id === player.Id)
    i === -1 ? this.Players.push(player) : this.Players[i] = player
  }

  CardsRemaining(): number {
    return this.Shoe.length
  }

  ServeDealer() {
    const card = this.Shoe.pop()

    this.DealerHand.push(card!)
  }

  ServePlayer(playerId: string, hand: 0 | 1 = 0) {
    let player = this.GetPlayer(playerId)
    player!.Hands[hand].push(this.Shoe.pop()!)
    this.UpdatePlayer(player!)
  }

  GetPlayer(id?: string, sessionId?: string): Player | undefined {
    return this.Players.find(p => p.Id === id || p.SessionId === sessionId)
  }

  RemovePlayer(player: Player) {
    this.Players = this.Players.filter(p => p.Id === player.Id || p.SessionId === player.SessionId)
  }

  Settle() {
    this.Players = this.Players.map(p => {
      if (true) {
        p.Balance += p.CurrentBet
      }

      return p
    })
  }

  Shuffle() {
    // NOTE: initializing shoe with 6 decks
    this.Shoe = [
      ...Deck,
      ...Deck,
      ...Deck,
      ...Deck,
      ...Deck,
      ...Deck,
    ]

    // NOTE: knuth shuffle
    let ci = this.Shoe.length, ri // current index, random index
    while (ci != 0) {
      ri = Math.floor(Math.random() * ci)
      ci--

      // NOTE: swap values using array destructuring
      [this.Shoe[ci], this.Shoe[ri]] = [this.Shoe[ri], this.Shoe[ci]]
    }
  }

  UpdatePlayer(player: Player) {
    const i = this.Players.findIndex(p => p.Id === player.Id)
    if (i === -1) {
      throw new Error("")
    } else {
      this.Players[i] = player
    }
  }
}
