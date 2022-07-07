import express from 'express'
import cors from 'cors'
import PlayerService from '../internal/player/player.service'
import SessionService from '../internal/session/session.service'
import TableService from '../internal/table/table.service'

const app = express()
const expressWs = require('express-ws')(app)

// services
const playerService = new PlayerService()
const sessionService = new SessionService()
const tableService = new TableService()

app.use(cors())

app.get('/player/current', function (req, res) {
  const player = playerService.CreatePlayer()

  res.json(player)
})

app.get('/api/session', function (req, res) {
  const session = sessionService.CreateSession()

  res.json(session)
})

app.post('/api/table/create', function (req, res) {
  const table = tableService.CreateTable()

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
