import { Request, Response, NextFunction } from 'express'
import SessionService, { GetSessionInput, CreateSessionInput, UpdateSessionInput } from 'session/session.service'

export default class SessionController {
  sessionService: SessionService

  constructor(sessionService: SessionService) {
    this.sessionService = sessionService
  }

  AuthenticateSession(request: Request, response: Response, next: NextFunction) {
    const header = request.headers.authorization
    if (!header) {
      next()

      return
    }

    const matches = header.match(/Basic (.*)/g)
    if ((matches == null) || matches.length !== 2) {
      next()

      return
    }

    const sessionId = Buffer.from(matches[0]).toString('base64')
    const sessionSecret = Buffer.from(matches[1]).toString('base64')

    if (sessionId && sessionSecret) {
      const session = this.sessionService.AuthenticateSession({
        Parameters: {
          SessionId: sessionId,
          SessionSecret: sessionSecret
        }
      })

      console.log(session)
    }

    next()
  }

  GetSession(request: Request, response: Response) {
    const input: GetSessionInput = {
      Parameters: {
        SessionId: request.params.sessionId
      }
    }

    const output = this.sessionService.GetSession(input)

    console.log('got session:', output)

    response.json(output)
  }

  CreateSession(request: Request, response: Response) {
    const input: CreateSessionInput = request.body
    const output = this.sessionService.CreateSession(input)

    console.log('created session:', output)

    response.json(output)
  }

  UpdateSession(request: Request, response: Response) {
    console.log('updating session:', request.body)
    
    const input: UpdateSessionInput = request.body
    const output = this.sessionService.UpdateSession(input)

    console.log('updated session:', output)

    response.json(output)
  }
}
