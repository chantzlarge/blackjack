import express from 'express'
import SessionService from 'session/session.service'

export default class AuthenticateSessionHandler {
  sessionService: SessionService

  constructor (sessionService: SessionService) {
    this.sessionService = sessionService
  }

  Handle (req: express.Request, res: express.Response, next: express.NextFunction) {
    const body = req.body

    if (body?.session) {
      const session = this.sessionService.GetSession(undefined, body.session?.secret)
    }

    next()
  }
}
