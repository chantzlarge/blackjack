import Session from './session'

export default class SessionRepository {
  sessions: Session[] = []

  deleteSession (id: string) {
    this.sessions = this.sessions.filter((s, i) => s.Id !== id)
  }

  selectSession (id: string): Session | undefined {
    return this.sessions.find(s => s.Id === id)
  }

  insertSession (session: Session) {
    return this.sessions.push(session)
  }

  updateSession (session: Session) {
    this.sessions = this.sessions.map(s => s.Id === session.Id ? session : s)
  }
}
