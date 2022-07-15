import Session from './session'

export default class SessionRepository {
  sessions: Session[] = []

  DeleteSession (id: string) {
    this.sessions = this.sessions.filter((s, i) => s.Id !== id)
  }

  SelectSessionById (id: string): Session | undefined {
    return this.sessions.find(s => s.Id === id)
  }

  InsertSession (session: Session) {
    return this.sessions.push(session)
  }

  UpdateSession (session: Session) {
    this.sessions = this.sessions.map(s => s.Id === session.Id ? session : s)
  }
}
