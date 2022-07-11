import express from 'express'
import SessionService from '../internal/session/session.service'

export default class CurrentSessionHandler {
  sessionService: SessionService

  constructor (sessionService: SessionService) {
    this.sessionService = sessionService
  }

  Handle (req: express.Request, res: express.Response) {
    const session = this.sessionService.CreateSession()

    res.json(session)
  }
}
