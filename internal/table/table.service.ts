import Player from '../player/player'
import Table from './table'
import TableRepository from './table.repository'

export default class TableService {
  tableRepository: TableRepository

  constructor(tableRepository: TableRepository) {
    this.tableRepository = tableRepository
  }

  AddPlayer(id: string, player: Player) {
    const table = this.tableRepository.SelectTableById(id)

    table?.AddPlayer(player)

    this.tableRepository.UpdateTable(table!)
  }

  CreateTable(): Table {
    const table = new Table()

    this.tableRepository.InsertTable(table)

    return table
  }

  DeleteTable(id: string) {
    this.tableRepository.DeleteTable(id)
  }

  GetTable(id: string): Table | undefined {
    return this.tableRepository.SelectTableById(id)
  }

  RemovePlayer(id: string, playerId: string) {
    const table = this.tableRepository.SelectTableById(id)

    table?.RemovePlayer(playerId)

    this.tableRepository.UpdateTable(table!)
  }
}
