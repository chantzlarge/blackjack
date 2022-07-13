import Player from './player'
import Table from './table'
import TablePublisher from './table.publisher'
import TableRepository from './table.repository'

interface Input {
  Parameters?: {}
}

interface Output {
  Errors?: string[]
  Ok: boolean
  Response?: any
}

export interface AddPlayerInput extends Input {
  Parameters: {
    TableId: string
  }
}

export interface AddPlayerOutput extends Output {
  Response?: Table
}

export interface CreateTableInput extends Input {
  Parameters: {
    SessionId: string
  }
}

export interface CreateTableOutput extends Output {
  Response?: Table
}

export interface CloseTableInput extends Input {
  Parameters: {
    TableId: string
  }
}

export interface CloseTableOutput extends Output {
  Response?: {
    Id: string
  }
}
export interface GetPlayerInput extends Input {
  Parameters: {
    PlayerId: string
    TableId: string
  }
}

export interface GetPlayerOutput extends Output {
  Response?: Player
}

export interface GetTableInput extends Input {
  Parameters: {
    TableId: string
  }
}

export interface GetTableOutput extends Output {
  Response?: Table
}

export interface JoinTableInput extends Input {
  Parameters: {
    TableId: string
    Code: string
  }
}

export interface JoinTableOutput extends Output {
  Response?: Table
}

export default class TableService {
  tablePublisher: TablePublisher
  tableRepository: TableRepository

  constructor(
    tablePublisher: TablePublisher,
    tableRepository: TableRepository
  ) {
    this.tablePublisher = tablePublisher
    this.tableRepository = tableRepository
  }

  AddPlayer(input: AddPlayerInput): AddPlayerOutput {
    const tableId = input.Parameters.TableId
    const table = this.tableRepository.SelectTableById(tableId)
    const player = new Player()

    if (!table) {
      return {
        Ok: false
      }
    }

    table.AddPlayer(player)

    this.tableRepository.UpdateTable(table!)

    return {
      Ok: true,
      Response: table
    }
  }

  CreateTable(input: CreateTableInput): CreateTableOutput {
    const table = new Table()

    this.tableRepository.InsertTable(table)

    return {
      Ok: true,
      Response: table
    }
  }

  CloseTable(id: string) {
    this.tableRepository.DeleteTable(id)
  }

  GetPlayer(input: GetPlayerInput): GetPlayerOutput {
    const playerId = input.Parameters.PlayerId
    const tableId = input.Parameters.TableId

    const table = this.tableRepository.SelectTableById(tableId)
    const player = table?.Players.find(p => p.Id === playerId)

    if (!player) {
      return {
        Ok: false
      }
    }

    return {
      Ok: true,
      Response: player
    }
  }

  GetTable(input: GetTableInput): GetTableOutput {
    const table = this.tableRepository.SelectTableById(input.Parameters.TableId)

    if (!table) {
      return {
        Ok: false
      }
    }

    return {
      Ok: true,
      Response: table
    }
  }

  DealCardToPlayer(playerId: string, tableId: string): Table {
    let table = this.tableRepository.SelectTableById(tableId)

    console.log(table)

    return table!
  }


  JoinTable(input: JoinTableInput): JoinTableOutput {
    const tableId = input.Parameters.TableId
    const code = input.Parameters.Code

    if (!tableId || !code) {
      return {
        Errors: ["invalid input"],
        Ok: false,
      }
    }

    const table = this.tableRepository.SelectTableById(tableId)

    return {
      Ok: true,
      Response: table
    }
  }

  RemovePlayer(id: string, playerId: string) {
    const table = this.tableRepository.SelectTableById(id)

    table?.RemovePlayer(playerId)

    this.tableRepository.UpdateTable(table!)
  }
}
