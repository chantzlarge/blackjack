import server from './api/server'

server.listen(3000, '0.0.0.0', function () {
    // @ts-expect-error
    const address = this.address()!.address
    // @ts-expect-error
    const port = this.address()!.port

    console.log('server is listening at http://%s:%s', address, port)
})
