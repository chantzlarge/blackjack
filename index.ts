import express from 'express'
import cors from 'cors'
import path from 'path'
import TableService from './internal/table/table.service'
import SessionRepository from './internal/session/session.repository'
import SessionService from './internal/session/session.service'
import TableRepository from './internal/table/table.repository'

const app = express()
const expressWs = require('express-ws')(app)

// repositories
const sessionRepository = new SessionRepository()
const tableRepository = new TableRepository()

// services
const sessionService = new SessionService(sessionRepository)
const tableService = new TableService(tableRepository)

// middleware
app.use(express.json())
app.use(cors())

app.use('/', express.static(path.join(__dirname, './web/dist')))

// routes
// app.get('/api/player/current', function (req, res) {
//   const sessionId = req.body.session.Id
//   // const sessionSecret = req.body.session.Secret

//   res.json(player)
// })

app.get('/api/session/current', function (req, res) {
  // const sessionId = req.body.session.Id
  // const sessionSecret = req.body.session.Secret

  const session = sessionService.GetSession()

  res.json(session)
})

app.post('/api/session/create', function (req, res) {
  const session = sessionService.GetSession()

  res.json(session)
})

app.post('/api/table/create', function (req, res) {
  // const sessionId = req.body.Id
  // const sessionSecret = req.body.Secret

  const table = tableService.CreateTable()

  res.json(table)
})

app.post('/api/table/join', function (req, res) {
  const table = tableService.CreateTable()

  res.json(table)
})

// @ts-expect-error
app.ws('/socket', function (ws, req) {
  ws.on('message', function (msg: any) {
    console.log(msg)
  })
})

app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'web', 'dist', 'index.html')))

const server = app.listen(3000, '0.0.0.0', function () {
  // @ts-expect-error
  const host = server.address()!.address
  // @ts-expect-error
  const port = server.address()!.port

  console.log('server is listening at http://%s:%s', host, port)
})
