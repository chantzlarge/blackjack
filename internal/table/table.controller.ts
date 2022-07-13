import { Request, Response } from 'express';
import express from 'express'
import expressWs from 'express-ws';
import SessionService from "session/session.service";
import TableService, { GetPlayerInput, GetTableInput } from "table/table.service";
import Player from './player';

export default class TableController {
    sessionService: SessionService
    tableService: TableService

    constructor(
        sessionService: SessionService,
        tableService: TableService,
    ) {
        this.sessionService = sessionService
        this.tableService = tableService
    }

    Connect(ws: expressWs.Application, req: express.Request) {
        ws.on('open', (message) => console.log(message))
        ws.on('message', (message) => console.log(message))
    }

    CreateTable(request: Request, response: Response) {
        const input = request.body
        const createTableOutput = this.tableService.CreateTable(input)

        const addPlayerOutput = this.tableService.AddPlayer({
            Parameters: {
                TableId: createTableOutput.Response?.Id!
            }
        })

        response.json(addPlayerOutput)
    }

    GetPlayer(request: Request, response: Response) {
        const input: GetPlayerInput = {
            Parameters: {
                PlayerId: request.params['playerId'],
                TableId: request.params['tableId']
            }
        }

        const output = this.tableService.GetPlayer(input)

        response.json(output)
    }

    GetTable(request: Request, response: Response) {
        const input: GetTableInput = request.body
        const output = this.tableService.GetTable(input)

        response.json(output)
    }

    JoinTable(request: Request, response: Response) {

    }

    CloseTable(request: Request, response: Response) {

    }
}