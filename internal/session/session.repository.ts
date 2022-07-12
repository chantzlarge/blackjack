import Session from './session'
export default class SessionRepository {
  sessions: Session[] = []

  deleteSession (id: string) {
    this.sessions = this.sessions.filter(s => s.Id !== id)
  }

  selectSessionById (id: string): Session | undefined {
    return this.sessions.find(s => s.Id === id)
  }
  
  selectSessionBySecret (secret: string): Session | undefined {
    return this.sessions.find(s => s.Secret === secret)
  }

  insertSession (session: Session) {
    this.sessions.push(session)
  }

  updateSession (session: Session) {
    this.sessions = this.sessions.map(s => s.Id === session.Id ? session : s)
  }
}
