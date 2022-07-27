import Session from './session'

export default class SessionRepository {
  sessions: Session[] = []

  DeleteSession (id: string): void {
      this.sessions = this.sessions.filter(s => s.id !== id)
  }

  SelectSessionById (id: string): Session {
      const session = this.sessions.find(s => s.id === id)

      if (!session) {
        throw new Error('')
      }

      return session
  }

  InsertSession (session: Session): number {
      return this.sessions.push(session)
  }

  UpdateSession (session: Session): void {
      this.sessions = this.sessions.map(s => s.id === session.id ? session : s)
  }
}
