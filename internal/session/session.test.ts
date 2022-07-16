import Session from './session'

describe('Session', () => {
    describe('new', () => {
        test('SHOULD create new instance of Session', () => {
            const session = new Session()

            expect(session).toBeInstanceOf(Session)
            expect(typeof session.Id).toBe('string')
            expect(typeof session.Secret).toBe('string')
        })
    })
})