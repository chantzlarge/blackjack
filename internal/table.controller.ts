import { Request, Response } from 'express'
import {Application} from 'express-ws'
import TableService, { 
  CreateTableInput,
  CreateTableOutput,
  GetCurrentTableInput,
  GetCurrentTableOutput,
  JoinTableInput,
  JoinTableOutput,
 } from './table.service'

export default class TableController {
  tableService: TableService

  constructor (
    tableService: TableService
  ) {
    this.tableService = tableService
  }

  Connect (websocket: Application, request: Request) {
    websocket.on('open', (message) => console.log(message))
    websocket.on('message', (message) => console.log(message))
  }

  CreateTable (request: Request, response: Response) {
    const input: CreateTableInput = request.body
    const output: CreateTableOutput= this.tableService.CreateTable(input)

    response.json(output)
  }

  GetCurrentTable (request: Request, response: Response) {
    const input: GetCurrentTableInput = request.body
    const output: GetCurrentTableOutput = this.tableService.GetCurrentTable(input)

    response.json(output)
  }
  
  JoinTable (request: Request, response: Response) {
    const input: JoinTableInput = request.body
    const output: JoinTableOutput = this.tableService.JoinTable(input)
  
    response.json(output)
  }
}
