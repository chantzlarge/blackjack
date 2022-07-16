import SessionRepository from './session.repository'
import SessionService from './session.service'

describe('SessionService', () => {
  describe('new SessionService()', () => {
    test('SHOULD construct new instance of SessionService', () => {
      const sessionRepository = new SessionRepository()
      const sessionService = new SessionService(sessionRepository)

      expect(sessionService).toBeInstanceOf(SessionService)
    })
  })
})
