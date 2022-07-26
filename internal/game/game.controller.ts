import { NextFunction, Request, Response } from "express";
import { Application } from "express-ws";
import GameService from "./game.service";

export const enum Action {
    BET = 'bet',
    HIT = 'hit',
    LEAVE = 'leave',
    SIT = 'sit',
    STAND = 'stand',
}

export default class GameController {
    applications: Application[] = []
    gameService: GameService

    constructor(gameService: GameService) {
        this.gameService = gameService
    }

    Authenticate(request: Request, response: Response, next: NextFunction) {
        // const payload = request.body
        // const session = this.gameService.Authenticate(payload.session.id, payload.session.secret)

        next()
    }

    Broadcast(event: any) {
        for (const application of this.applications) {
            // @ts-expect-error
            application.send(JSON.stringify(event))
        }
    }

    Connect(application: Application, request: Request) {
        application.on('message', event => this.OnMessage(event))
        application.on('open', event => this.OnOpen(event))

        this.applications.push(application)
    }

    Create(request: Request, response: Response) {
        response.json(this.gameService.Create())
    }

    Current(request: Request, response: Response) {
        const data = request.body
        
        console.log(data)

        response.json(this.gameService.Current(data))
    }

    OnMessage(event: any) {
        const data: any = JSON.parse(event)

        console.log(data)

        switch (data.action) {
            case Action.BET:
                this.Broadcast(this.gameService.Bet(data.payload.session, data.payload.amount))
                break
            case Action.HIT:
                this.Broadcast(this.gameService.Hit(data.payload.session))
                break
            case Action.LEAVE:
                this.Broadcast(this.gameService.Leave(data.payload.session))
                break
            case Action.SIT:
                this.Broadcast(this.gameService.Sit(data.payload.session))
                break
            case Action.STAND:
                this.Broadcast(this.gameService.Stand(data.payload.session))
            default:
                console.log(event)
        }
    }

    OnOpen(event: any) {
        console.log(event)
    }
}