import Player from './player'
import SessionRepository from 'session.repository'
import Table, { State } from './table'
import TableRepository from './table.repository'
import Hand from './hand'

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

  constructor(
    sessionRepository: SessionRepository,
    tableRepository: TableRepository,
  ) {
    this.sessionRepository = sessionRepository
    this.tableRepository = tableRepository
  }

  CreateTable(input: CreateTableInput): CreateTableOutput {
    const player = new Player(input.Parameters.SessionId)
    const table = new Table()

    player.Hands.push(new Hand())

    table.Players.push(player)

    this.tableRepository.InsertTable(table)

    return {
      Ok: true,
      Response: table
    }
  }

  GetCurrentTable(input: GetCurrentTableInput): GetCurrentTableOutput {
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
          p.Hands.push(new Hand().DealCard(table.Shoe.DrawCard()!).DealCard(table.Shoe.DrawCard()!))

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

        table.State = State.DealerTurn
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

  JoinTable(input: JoinTableInput): JoinTableOutput {
    return {
      Ok: true,
    }
  }
}
