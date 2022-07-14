import Table from './table'
import TablePublisher from './table.publisher'
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

export interface DeleteTableInput {
  Parameters: {
    TableId: string
  }
}

export interface DeleteTableOutput {
  Errors?: string[]
  Ok: boolean
  Response?: {
    Id: string
  }
}

export interface GetTableInput {
  Parameters: {
    TableId: string
  }
}

export interface GetTableOutput {
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
  tablePublisher: TablePublisher
  tableRepository: TableRepository

  constructor(
    tablePublisher: TablePublisher,
    tableRepository: TableRepository
  ) {
    this.tablePublisher = tablePublisher
    this.tableRepository = tableRepository
  }


  CreateTable(input: CreateTableInput): CreateTableOutput {
    const table = new Table()

    this.tableRepository.InsertTable(table)

    return {
      Ok: true,
      Response: table
    }
  }

  DeleteTable(input: DeleteTableInput): DeleteTableOutput {

    this.tableRepository.DeleteTable(input.Parameters.TableId)

    return {
      Ok: true,
      Response: {
        Id: input.Parameters.TableId
      }
    }
  }


  GetTable(input: GetTableInput): GetTableOutput {
    const table = this.tableRepository.SelectTableById(input.Parameters.TableId)

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
    const tableId = input.Parameters.TableId
    const code = input.Parameters.Code

    if (!tableId || !code) {
      return {
        Errors: ['invalid input'],
        Ok: false
      }
    }

    const table = this.tableRepository.SelectTableById(tableId)

    return {
      Ok: true,
      Response: table
    }
  }
}
