import Session from './session'
export default class SessionRepository {
  sessions: Session[] = []

  getSessionById (id: string): Session | null {
    this.sessions.forEach(session => {
      if (session.Id === id) {
        return session
      }
    })

    return null
  }

  getSessionBySecret (secret: string): Session | null {
    this.sessions.forEach(session => {
      // TBD
    })

    return null
  }
}
