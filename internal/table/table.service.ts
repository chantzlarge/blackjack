import Player from '../player/player'
import SessionRepository from '../session/session.repository'
import Table, { State } from './table'
import TableRepository from './table.repository'
import Hand, { State as HandState } from '../hand/hand'

export interface CreateTableInput {
  Parameters: {
    SessionId: string
  }
}

export interface CreateTableOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Table
}

export interface GetCurrentTableInput {
  Parameters: {
    SessionId: string
  }
}

export interface GetCurrentTableOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Table
}

export interface JoinTableInput {
  Parameters: {
    TableId: string
    Code: string
  }
}

export interface JoinTableOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Table
}

export default class TableService {
  sessionRepository: SessionRepository
  tableRepository: TableRepository

  constructor (
    sessionRepository: SessionRepository,
    tableRepository: TableRepository
  ) {
    this.sessionRepository = sessionRepository
    this.tableRepository = tableRepository
  }

  CreateTable (input: CreateTableInput): CreateTableOutput {
    const player = new Player(input.Parameters.SessionId)
    const table = new Table()

    table.Players.push(player)

    this.tableRepository.InsertTable(table)

    return {
      Ok: true,
      Response: table
    }
  }

  GetCurrentTable (input: GetCurrentTableInput): GetCurrentTableOutput {
    const table = this.tableRepository.SelectTableBySessionId(input.Parameters.SessionId)

    if (table == null) {
      return {
        Ok: false
      }
    }

    switch (table.State) {
      case State.PlacingBets:
        console.log(table.State)

        break
      case State.DealingToPlayers:
        console.log(table.State)

        table.Players = table.Players.map(p => {
          const hand = new Hand()

          for (let i = 0; i < 2; i++) {
            hand.DealCard(table.Shoe.DrawCard()!)  
          }

          p.Hands.push(hand)

          return p
        })

        table.State = State.DealingToDealer
        this.tableRepository.UpdateTable(table)

        break
      case State.DealingToDealer:
        console.log(table.State)

        table.Dealer.Hand.DealCard(table.Shoe.DrawCard()!).DealCard(table.Shoe.DrawCard()!)
        table.State = State.BuyingInsurance
        this.tableRepository.UpdateTable(table)

        break
      case State.BuyingInsurance:
        console.log(table.State)

        table.State = State.PayingNaturals
        this.tableRepository.UpdateTable(table)

        break
      case State.PayingNaturals:
        console.log(table.State)

        table.State = State.PlayerTurn
        this.tableRepository.UpdateTable(table)

        break
      case State.PlayerTurn:
        console.log(table.State)

        const i = table.Players
          .map(p => p.Hands)
          .reduce((p, c) => [...p, ...c], [])
          .map(h => h.State)
          .findIndex(s => s === HandState.Hit)

        if (i == -1) {
          table.State = State.DealerTurn
        }

        this.tableRepository.UpdateTable(table)

        break
      case State.DealerTurn:
        console.log(table.State)

        if (table.Dealer.Hand.Score() <= 16) {
          table.Dealer.Hand.DealCard(table.Shoe.DrawCard()!)
        } else if (table.Dealer.Hand.Score() > 21) {
          table.Dealer.Hand = new Hand()
          table.State = State.SettlingBets
        } else {
          table.State = State.SettlingBets
        }

        this.tableRepository.UpdateTable(table)

        break
      case State.SettlingBets:
        console.log(table.State)
        const dealerScore = table.Dealer.Hand.Score()

        table.Dealer.Hand = new Hand()
        table.Players = table.Players.map(p => {
          p.Balance += p.Hands
            .filter(h => h.State != HandState.Bust)
            .map(h => h.Score())
            .reduce((award, score) => {
              if (score > dealerScore) award += 2 * p.CurrentBet
              else if (score === dealerScore) award += p.CurrentBet

              return award
            }, 0)
          p.CurrentBet = 0
          p.Hands = []

          return p
        })
        table.State = State.PlacingBets
        this.tableRepository.UpdateTable(table)

        break
    }

    return {
      Ok: true,
      Response: table
    }
  }

  JoinTable (input: JoinTableInput): JoinTableOutput {
    return {
      Ok: true
    }
  }
}
