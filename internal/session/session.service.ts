import Session from './session'
import SessionRepository from './session.repository'

export default class SessionService {
  sessionRepository: SessionRepository

  constructor (sessionRepository: SessionRepository) {
    this.sessionRepository = sessionRepository
  }

  CreateSession (): Session {
    return new Session()
  }

  DeleteSession (): Session {
    return new Session()
  }

  GetSession (): Session {
    return new Session()
  }
}
