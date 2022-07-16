import { Request, Response } from 'express'
import { Application } from 'express-ws'

import PlayerService, {
  BetInput,
  BuyInsuranceInput,
  GetCurrentPlayerInput,
  HitInput,
  LeaveTableInput,
  SitInput,
  SplitInput,
  StandInput
} from './player.service'

export default class PlayerController {
  playerService: PlayerService

  constructor (playerService: PlayerService) {
    this.playerService = playerService
  }

  Bet (request: Request, response: Response) {
    const input: BetInput = request.body
    const output = this.playerService.Bet(input)

    response.json(output)
  }

  BuyInsurance (request: Request, response: Response) {
    const input: BuyInsuranceInput = request.body
    const output = this.playerService.BuyInsurance(input)

    response.json(output)
  }

  Connect (websocket: Application, request: Request) {
    websocket.on('open', (message) => console.log(message))
    websocket.on('message', (message) => console.log(message))
  }

  GetCurrentPlayer (request: Request, response: Response) {
    const input: GetCurrentPlayerInput = request.body
    const output = this.playerService.GetCurrentPlayer(input)

    response.json(output)
  }

  Hit (request: Request, response: Response) {
    const input: HitInput = request.body
    const output = this.playerService.Hit(input)

    response.json(output)
  }

  LeaveTable (request: Request, response: Response) {
    const input: LeaveTableInput = request.body
    const output = this.playerService.LeaveTable(input)

    response.json(output)
  }

  Sit (request: Request, response: Response) {
    const input: SitInput = request.body
    const output = this.playerService.Sit(input)

    response.json(output)
  }

  Split (request: Request, response: Response) {
    const input: SplitInput = request.body
    const output = this.playerService.Split(input)

    response.json(output)
  }

  Stand (request: Request, response: Response) {
    const input: StandInput = request.body
    const output = this.playerService.Stand(input)

    response.json(output)
  }
}
