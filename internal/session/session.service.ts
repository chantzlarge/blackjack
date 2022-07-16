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
    sessionRepository: SessionRepository
  ) {
    this.sessionRepository = sessionRepository
  }

  async AuthenticateSession (input: AuthenticateSessionInput): Promise<AuthenticateSessionOutput> {
    const session = await this.sessionRepository.SelectSessionById(input.Parameters.SessionId)

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

  async GetCurrentSession (input: GetCurrentSessionInput): Promise<GetCurrentSessionOutput> {
    const session = await this.sessionRepository.SelectSessionById(input.Parameters.SessionId)

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

  async GrantSession (input?: GrantSessionInput): Promise<GrantSessionOutput> {
    const session = new Session()

    await this.sessionRepository.InsertSession(session)

    return {
      Ok: true,
      Response: session
    }
  }
}
