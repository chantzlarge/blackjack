import Session from './session'

export default class SessionRepository {
  sessions: Session[] = []

  DeleteSession (id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.sessions = this.sessions.filter(s => s.Id !== id)
      
      resolve()
    })
  }

  SelectSessionById (id: string): Promise<Session> {
    return new Promise((resolve, reject) => {
      const session = this.sessions.find(s => s.Id === id)

      if (session != null) {
        resolve(session)
      }

      reject('session not found')
    })
  }

  InsertSession (session: Session): Promise<number> {
    return new Promise((resolve, reject) => {
      const i = this.sessions.push(session)

      resolve(i)
    })
  }

  UpdateSession (session: Session): Promise<void> {
    return new Promise((resolve, reject) => {
      this.sessions = this.sessions.map(s => s.Id === session.Id ? session : s)

      resolve()
    })
  }
}
