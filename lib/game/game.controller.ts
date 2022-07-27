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

  Bet(data: any) {
    const game = this.gameService.Bet(data.payload.session, data.payload.amount)

    this.Broadcast(game)
  }

  BuyInsurance(data: any) {
    const game = this.gameService.BuyInsurance(data.payload.session)

    this.Broadcast(game)
  }


  Broadcast(event: any) {
    for (const application of this.applications) {
      // @ts-expect-error
      application.send(JSON.stringify(event))
    }
  }

  Connect(application: Application, request: Request) {
    application.on('message', event => this.onMessage(event))
    application.on('open', event => this.onOpen(event))

    this.applications.push(application)
  }

  Create(request: Request, response: Response) {
    response.json(this.gameService.Create())
  }

  Current(request: Request, response: Response) {
    const data = request.body
    const game = this.gameService.Current(data)

    response.json(game)
  }

  DeclineInsurance(data: any) {
    const game = this.gameService.DeclineInsurance(data.payload.session)

    this.Broadcast(game)
  }

  Hit(data: any) {
    const game = this.gameService.Hit(data.payload.session)

    this.Broadcast(game)
  }

  Join(request: Request, response: Response) {
    const data = request.body
    const game = this.gameService.Join(data.code)

    response.json(game)
  }

  Leave(data: any) {
    const game = this.gameService.Leave(data.payload.session)

    this.Broadcast(game)
  }

  onMessage(event: any) {
    const data: any = JSON.parse(event)

    switch (data.action) {
      case Action.BET:
        this.Bet(data)
        break
      case Action.BUY_INSURANCE:
        this.BuyInsurance(data)
        break
      case Action.DECLINE_INSURANCE:
        this.DeclineInsurance(data)
        break
      case Action.HIT:
        this.Hit(data)
        break
      case Action.LEAVE:
        this.gameService.Leave(data.payload.session)
        break
      case Action.SIT:
        this.Sit(data)
        break
      case Action.STAND:
        this.Stand(data)
        break
      default:
        console.log(event)
    }
  }

  onOpen(event: any) {
    console.log(event)
  }


  Sit(data: any) {
    const game = this.gameService.Sit(data.payload.session)

    this.Broadcast(game)
  }


  Stand(data: any) {
    const game = this.gameService.Stand(data.payload.session)

    this.Broadcast(game)
  }
}
