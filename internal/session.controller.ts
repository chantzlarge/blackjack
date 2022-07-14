import { Request, Response, NextFunction } from 'express'
import { Application } from 'express-ws'
import SessionService, {
  AuthenticateSessionInput,
  AuthenticateSessionOutput,
  GetCurrentSessionInput,
  GetCurrentSessionOutput,
  GrantSessionInput,
  GrantSessionOutput,
  RevokeSessionInput,
  RevokeSessionOutput,
} from 'session.service'

export default class SessionController {
  sessionService: SessionService

  constructor(sessionService: SessionService) {
    this.sessionService = sessionService
  }

  AuthenticateSession(request: Request, response: Response, next: NextFunction) {
    
    // TBD

    next()
  }

  Connect(websocket: Application, request: Request) {
    websocket.on('open', (message) => console.log(message))
    websocket.on('message', (message) => console.log(message))
}

  GetCurrentSession(request: Request, response: Response) {
    const input: GetCurrentSessionInput = request.body
    const output: GetCurrentSessionOutput = this.sessionService.GetCurrentSession(input)

    response.json(output)
  }

  GrantSession(request: Request, response: Response) {
    const input: GrantSessionInput = request.body
    const output: GrantSessionOutput = this.sessionService.GrantSession(input)

    response.json(output)
  }

  RevokeSession(request: Request, response: Response) {
    const input: RevokeSessionInput = request.body
    const output: RevokeSessionOutput = this.sessionService.RevokeSession(input)

    response.json(output)
  }
}
