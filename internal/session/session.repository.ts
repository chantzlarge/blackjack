import Session from './session'
export default class SessionRepository {
  sessions: Session[] = []

  deleteSession (id: string) {
    this.sessions = this.sessions.filter(s => s.Id !== id)
  }

  selectSessionById (id: string): Session | null {
    this.sessions.forEach(session => {
      if (session.Id === id) {
        return session
      }
    })

    return null
  }

  selectSessionBySecret (secret: string): Session | null {
    this.sessions.forEach(session => {
      // TBD
    })

    return null
  }

  insertSession (session: Session) {
    this.sessions.push(session)
  }
}
