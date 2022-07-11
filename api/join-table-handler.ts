import express from 'express'
import TableService from 'table/table.service'

export default class CreateTableHandler {
  tableService: TableService

  constructor (tableService: TableService) {
    this.tableService = tableService
  }

  Handle (req: express.Request, res: express.Response) {
    // const sessionId = req.body.Id
    // const sessionSecret = req.body.Secret

    this.tableService.JoinTable()

    // res.json(t)
  }
}
