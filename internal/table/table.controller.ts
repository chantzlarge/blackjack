import express, { Request, Response } from 'express'
import expressWs from 'express-ws'
import SessionService from 'session/session.service'

import TableService, { 
  CreateTableInput,
  CreateTableOutput,
  GetTableInput,
  GetTableOutput,
 } from 'table/table.service'

export default class TableController {
  sessionService: SessionService
  tableService: TableService

  constructor (
    sessionService: SessionService,
    tableService: TableService
  ) {
    this.sessionService = sessionService
    this.tableService = tableService
  }

  Connect (ws: expressWs.Application, req: express.Request) {
    ws.on('open', (message) => console.log(message))
    ws.on('message', (message) => console.log(message))
  }

  CreateTable (request: Request, response: Response) {
    const input: CreateTableInput = request.body
    const output: CreateTableOutput= this.tableService.CreateTable(input)

    response.json(output)
  }

  GetTable (request: Request, response: Response) {
    const input: GetTableInput = {
      Parameters: {
        TableId: request.params['tableId']
      }
    }
    
    const output: GetTableOutput = this.tableService.GetTable(input)

    console.log('got table', output.Response)

    response.json(output)
  }

  JoinTable (request: Request, response: Response) {

  }

  CloseTable (request: Request, response: Response) {

  }
}
