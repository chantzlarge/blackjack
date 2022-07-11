import express from 'express'
import TableService from 'table/table.service'

export default class CreateTableHandler {
  tableService: TableService

  constructor (tableService: TableService) {
    this.tableService = tableService
  }

  Handle (request: express.Request, response: express.Response) {
    // const sessionId = request.body.Id
    // const sessionSecret = request.body.Secret

    const table = this.tableService.CreateTable()

    response.json(table)
  }
}
