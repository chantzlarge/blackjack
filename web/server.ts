import express from 'express'
import path from 'path'

const app = express()

app.use('/', express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')))

const server = app.listen(3000, function () {
  // @ts-expect-error
  const host = server.address()!.address
  // @ts-expect-error
  const port = server.address()!.port

  console.log('web server is listening at http://%s:%s', host, port)
})
