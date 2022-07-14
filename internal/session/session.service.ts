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

export interface GetSessionInput {
  Parameters: {
    SessionId: string
  }
}

export interface GetSessionOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Session
}

export interface CreateSessionInput {
  Parameters: {}
}

export interface CreateSessionOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Session
}

export interface RevokeSessionInput {
  Parameters: {
    SessionId: string
  }
}

export interface RevokeSessionOutput {
  Errors?: string[]
  Ok: boolean
  Response?: {
    Id: string
  }
}

export interface UpdateSessionInput {
  Parameters: Session
}

export interface UpdateSessionOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Session
}

export default class SessionService {
  sessionRepository: SessionRepository

  constructor(sessionRepository: SessionRepository) {
    this.sessionRepository = sessionRepository
  }

  AuthenticateSession(input: AuthenticateSessionInput): AuthenticateSessionOutput {
    const sessionId = input.Parameters.SessionId
    const sessionSecret = input.Parameters.SessionSecret

    if (!sessionId || !sessionSecret) {
      return {
        Ok: false,
        Errors: ['invalid input']
      }
    }

    const session = this.sessionRepository.selectSession(sessionId)

    // TODO: replace with hash comparison

    if ((session == null) || (session.Secret !== sessionSecret)) {
      return {
        Ok: false,
        Errors: [
          'unauthorized'
        ]
      }
    }

    return {
      Ok: true,
      Response: session
    }
  }

  CreateSession(input: CreateSessionInput): CreateSessionOutput {
    const session = new Session()

    this.sessionRepository.insertSession(session)

    return {
      Ok: true,
      Response: session
    }
  }

  GetSession(input: GetSessionInput): GetSessionOutput {
    const sessionId = input.Parameters.SessionId

    if (!sessionId) {
      return {
        Errors: ['invalid input'],
        Ok: false
      }
    }

    const session = this.sessionRepository.selectSession(sessionId)

    if (session == null) {
      return {
        Ok: false,
        Errors: [
          'not found'
        ]
      }
    }

    return {
      Ok: true,
      Response: session
    }
  }

  RevokeSession(input: RevokeSessionInput): RevokeSessionOutput {
    const sessionId = input.Parameters.SessionId

    if (!sessionId) {
      return {
        Ok: false,
        Errors: ['invalid input']
      }
    }

    this.sessionRepository.deleteSession(sessionId)

    return {
      Ok: true,
      Response: {
        Id: sessionId
      }
    }
  }

  UpdateSession(input: UpdateSessionInput): UpdateSessionOutput {
    const session = input.Parameters

    this.sessionRepository.updateSession(session)

    return {
      Ok: true,
      Response: session
    }
  }
}
