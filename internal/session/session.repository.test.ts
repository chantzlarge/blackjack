import Session from './session'
import SessionRepository from './session.repository'

describe('SessionRepository', () => {
  describe('new SessionRepository()', () => {
    test('SHOULD construct new instance of SessionRepository', () => {
      const sessionRepository = new SessionRepository()

      expect(sessionRepository).toBeInstanceOf(SessionRepository)
    })
  })

  describe('#DeleteSession()', () => {
    test('SHOULD delete session', async () => {
        const sessionRepository = new SessionRepository()
        const session = new Session()
        await sessionRepository.InsertSession(session)
        await sessionRepository.DeleteSession(session.Id)

        expect(sessionRepository.sessions).toEqual([])
    })
})

describe('#InsertSession()', () => {
    test('SHOULD insert session', async () => {
        const sessionRepository = new SessionRepository()
        const session = new Session()
        await sessionRepository.InsertSession(session)

        expect(sessionRepository.sessions).toEqual([session])
    })
})

describe('#SelectSessionById()', () => {
    test('SHOULD select session by id', async () => {
        const sessionRepository = new SessionRepository()
        const session = new Session()
        await sessionRepository.InsertSession(session)

        sessionRepository.SelectSessionById(session.Id)
            .then(t => expect(t).toEqual(session))
            .catch(r => expect(r).toBeUndefined())
    })
})

describe('#UpdateSession()', () => {
    test('SHOULD update session', async () => {
        const sessionRepository = new SessionRepository()
        const session = new Session()
        await sessionRepository.InsertSession(session)
        await sessionRepository.UpdateSession(session)

        expect(sessionRepository.sessions).toEqual([session])
    })
})
})
