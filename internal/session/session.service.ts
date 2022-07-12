import Session from './session'
import SessionRepository from './session.repository'

export default class SessionService {
  sessionRepository: SessionRepository

  constructor(sessionRepository: SessionRepository) {
    this.sessionRepository = sessionRepository
  }

  AuthenticateSession(secret: string): Session | undefined {
    return this.sessionRepository.selectSessionBySecret(secret)
  }

  CreateSession(): Session {
    const s = new Session()
    this.sessionRepository.insertSession(s)

    return s
  }

  GetSession(id: string): Session | undefined {
    return this.sessionRepository.selectSessionById(id)
  }

  UpdateSession(session: Session) {
    return this.sessionRepository.updateSession(session)
  }

  RevokeSession(id: string) {
    this.sessionRepository.deleteSession(id)
  }
}
