import express from 'express'
import cors from 'cors'
import PlayerService from '../internal/player/player.service'
import TableService from '../internal/table/table.service'
import SessionRepository from '../internal/session/session.repository'
import SessionService from '../internal/session/session.service'
import PlayerRepository from '../internal/player/player.repository'
import TableRepository from '../internal/table/table.repository'

const app = express()
const expressWs = require('express-ws')(app)

// repositories
const playerRepository = new PlayerRepository()
const sessionRepository = new SessionRepository()
const tableRepository = new TableRepository()

// services
const playerService = new PlayerService(playerRepository)
const sessionService = new SessionService(sessionRepository)
const tableService = new TableService(tableRepository)

// middleware
app.use(express.json())
app.use(cors())

// routes
app.get('/api/player/current', function (req, res) {
  const sessionId = req.body.session.Id
  const sessionKey = req.body.session.Key

  const player = playerService.CreatePlayer('')

  res.json(player)
})

app.get('/api/session/current', function (req, res) {
  const session = sessionService.GetSession()

  res.json(session)
})

app.post('/api/session/create', function (req, res) {
  const session = sessionService.GetSession()

  res.json(session)
})

app.post('/api/table/create', function (req, res) {
  // const sessionId = req.body.session.Id
  // const sessionKey = req.body.session.Key

  const table = tableService.CreateTable()
  const player = playerService.CreatePlayer(table.Id)

  res.json(table)
})

app.post('/api/table/join', function (req, res) {
  const table = tableService.CreateTable()

  res.json(table)
})

// @ts-expect-error
app.ws('/', function (ws, req) {
  ws.on('message', function (msg: any) {
    console.log(msg)
  })
})

const server = app.listen(3001, function () {
  // @ts-expect-error
  const host = server.address()!.address
  // @ts-expect-error
  const port = server.address()!.port

  console.log('api server is listening at http://%s:%s', host, port)
})
