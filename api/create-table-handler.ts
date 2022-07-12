import express from 'express'
import Player from '../internal/table/player'
import TableService from '../internal/table/table.service'

export default class CreateTableHandler {
  tableService: TableService

  constructor (tableService: TableService) {
    this.tableService = tableService
  }

  Handle (request: express.Request, response: express.Response) {
    const authHeader = request.header('Authorization')

    console.log(authHeader)

    const table = this.tableService.CreateTable()
    const player = new Player()

    const out = this.tableService.AddPlayer({
      SessionId: 'asdf',
      TableId: table.Id
    })

    response.json(out)
  }
}
