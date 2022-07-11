import Session from './session'
import SessionRepository from './session.repository'

export default class SessionService {
  sessionRepository: SessionRepository

  constructor (sessionRepository: SessionRepository) {
    this.sessionRepository = sessionRepository
  }

  CreateSession (): Session {
    const s = new Session()
    this.sessionRepository.insertSession(s)

    return s
  }

  GetSession (id?: string, secret?: string): Session | null {
    if (id) {
      return this.sessionRepository.selectSessionById(id)
    } else if (secret) {
      return this.sessionRepository.selectSessionBySecret(secret)
    }

    return null
  }

  RevokeSession (id: string) {
    this.sessionRepository.deleteSession(id)
  }
}
