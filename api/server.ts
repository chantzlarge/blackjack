import express from 'express'
import cors from 'cors'
import PlayerService from '../internal/player/player.service'
import SessionService from '../internal/session/session.service'
import TableService from '../internal/table/table.service'
const app = express()
const expressWs = require('express-ws')(app)

const playerService = new PlayerService()
const sessionService = new SessionService()
const tableService = new TableService()

app.use(cors())

app.get('/player', function (req, res) {
  const p = playerService.CreatePlayer()

  res.json(p)
})

app.get('/player', function (req, res) {
  const p = playerService.CreatePlayer()

  res.json(p)
})

app.get('/api/session', function (req, res) {
  const s = sessionService.CreateSession()

  res.json(s)
})

app.post('/api/table/create', function (req, res) {
  const t = tableService.CreateTable()

  res.json(t)
})

app.post('/api/table/join', function (req, res) {
  const t = tableService.CreateTable()

  res.json(t)
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
