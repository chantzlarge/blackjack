import { NextFunction, Request, Response } from 'express'
import { Application } from 'express-ws'
import Game from './game'
import GameService from './game.service'

export const enum Action {
  BET = 'BET',
  BUY_INSURANCE = 'BUY_INSURANCE',
  DECLINE_INSURANCE = 'DECLINE_INSURANCE',
  HIT = 'HIT',
  LEAVE = 'LEAVE',
  SIT = 'SIT',
  STAND = 'STAND',
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

  Join(request: Request, response: Response) {
    const data = request.body

    const game = this.gameService.Join(data.code)

    response.json(game)
  }

  OnMessage(event: any) {
    const data: any = JSON.parse(event)

    console.log(data)
    let game: Game;

    switch (data.action) {
      case Action.BET:
        game = this.gameService.Bet(data.payload.session, data.payload.amount)
        game.player = game.table.GetPlayer(game.session.playerId)
        this.Broadcast(game)
        break
      case Action.BUY_INSURANCE:
        game = this.gameService.BuyInsurance(data.payload.session)
        game.player = game.table.GetPlayer(game.session.playerId)
        this.Broadcast(game)
        break
      case Action.DECLINE_INSURANCE:
        game = this.gameService.DeclineInsurance(data.payload.session)
        game.player = game.table.GetPlayer(game.session.playerId)
        this.Broadcast(game)
        break
      case Action.HIT:
        game = this.gameService.Hit(data.payload.session)
        game.player = game.table.GetPlayer(game.session.playerId)
        this.Broadcast(game)
        break
        case Action.LEAVE:
        this.gameService.Leave(data.payload.session)
        break
      case Action.SIT:
        game = this.gameService.Sit(data.payload.session)
        game.player = game.table.GetPlayer(game.session.playerId)
        this.Broadcast(game)
        break
      case Action.STAND:
        game = this.gameService.Stand(data.payload.session)
        game.player = game.table.GetPlayer(data.payload.session.playerId)
        this.Broadcast(game)
      default:
        console.log(event)
    }
  }

  OnOpen(event: any) {
    console.log(event)
  }
}
