import Session from './session'
import SessionRepository from './session.repository'

export interface AuthenticateSessionInput {
  Parameters: {
    SessionId: string
    SessionSecret: string
  }
}

export interface AuthenticateSessionOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Session
}

export interface GetCurrentSessionInput {
  Parameters: {
    SessionId: string
  }
}

export interface GetCurrentSessionOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Session
}

export interface GrantSessionInput {
  Parameters?: {}
}

export interface GrantSessionOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Session
}

export default class SessionService {
  sessionRepository: SessionRepository

  constructor (
    sessionRepository: SessionRepository,
  ) {
    this.sessionRepository = sessionRepository
  }

  AuthenticateSession (input: AuthenticateSessionInput): AuthenticateSessionOutput {
    const session = this.sessionRepository.SelectSessionById(input.Parameters.SessionId)

    // if (!session || session.Secret !== input.Parameters.SessionSecret) {
    //   return {
    //     Ok: false
    //   }
    // }

    return {
      Ok: true,
      Response: session
    }
  }

  GetCurrentSession (input: GetCurrentSessionInput): GetCurrentSessionOutput {
    const session = this.sessionRepository.SelectSessionById(input.Parameters.SessionId)

    if (session == null) {
      return {
        Errors: ['not found'],
        Ok: false
      }
    }

    return {
      Ok: true,
      Response: session
    }
  }

  GrantSession (input?: GrantSessionInput): GrantSessionOutput {
    const session = new Session()

    this.sessionRepository.InsertSession(session)

    return {
      Ok: true,
      Response: session
    }
  }
}
