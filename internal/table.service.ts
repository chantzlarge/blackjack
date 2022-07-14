import Player from './player'
import SessionRepository from 'session.repository'
import Table from './table'
import TableRepository from './table.repository'

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
