import Player from './player'
import Table from './table'
import TableRepository from './table.repository'

interface AddPlayerInput {
  SessionId: string
  TableId: string
}

interface AddPlayerOutput {
  PlayerId: string
}

export default class TableService {
  tableRepository: TableRepository

  constructor (tableRepository: TableRepository) {
    this.tableRepository = tableRepository
  }

  AddPlayer (input: AddPlayerInput): AddPlayerOutput {
    const table = this.tableRepository.SelectTableById(input.TableId)
    const player = new Player()

    table?.AddPlayer(player)

    this.tableRepository.UpdateTable(table!)

    return {
      PlayerId: player.Id
    }
  }

  CreateTable (): Table {
    const table = new Table()

    this.tableRepository.InsertTable(table)

    return table
  }

  DeleteTable (id: string) {
    this.tableRepository.DeleteTable(id)
  }

  GetTable (id: string): Table | undefined {
    return this.tableRepository.SelectTableById(id)
  }

  RemovePlayer (id: string, playerId: string) {
    const table = this.tableRepository.SelectTableById(id)

    table?.RemovePlayer(playerId)

    this.tableRepository.UpdateTable(table!)
  }
}
