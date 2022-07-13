import { Request, Response, NextFunction } from 'express';
import SessionService, { GetSessionInput, GrantSessionInput } from "session/session.service";

export default class SessionController {
    sessionService: SessionService

    constructor(sessionService: SessionService) {
        this.sessionService = sessionService
    }

    AuthenticateSession(request: Request, response: Response, next: NextFunction) {
        const header = request.headers['authorization']
        if (!header) {
            next()

            return
        }

        const matches = header.match(/Basic (.*)/g)
        if (!matches || matches.length !== 2) {
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
                SessionId: request.params['sessionId']
            }
        }
        
        const output = this.sessionService.GetSession(input)

        response.json(output)
    }

    GrantSession(request: Request, response: Response) {
        const input: GrantSessionInput = request.body
        const output = this.sessionService.GrantSession(input)

        response.json(output)
    }
}