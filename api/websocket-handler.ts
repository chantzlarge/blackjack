import express from 'express'
import WebSocket from 'express-ws'
import TableService from '../internal/table/table.service'

export default class WebSocketHandler {
  tableService: TableService

  constructor (tableService: TableService) {
    this.tableService = tableService
  }

  Handle (ws: WebSocket.Application, req: express.Request) {
    ws.on('message', function (message: any) {
      const data = JSON.parse(message)

      switch (data.action) {
        case 'PLACE_BET':
          // this.tableService
        default:
          console.log(data)
      }
    })
  }
}
