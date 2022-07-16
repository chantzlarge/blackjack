import SessionRepository from './session.repository'

describe('SessionRepository', () => {
    describe('new', () => {
        test('SHOULD construct new instance of SessionRepository', () => {
            const sessionRepository = new SessionRepository()

            expect(sessionRepository).toBeDefined()
        })
    })  
})