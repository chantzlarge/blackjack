import express from 'express'
import cors from 'cors'
import path from 'path'
import SessionRepository from '../internal/session/session.repository'
import TableRepository from '../internal/table/table.repository'
import GameService from '../internal/game/game.service'
import GameController from '../internal/game/game.controller'

const app = express()
const expressWs = require('express-ws')(app)

// repositories
const sessionRepository = new SessionRepository()
const tableRepository = new TableRepository()

// service(s)
const gameService = new GameService(sessionRepository, tableRepository)

// controller(s)
const gameController = new GameController(gameService)

// middleware
app.use(express.json())
app.use(cors())
app.use('/', express.static(path.join(__dirname, '..', 'web', 'dist')))
app.use((req, res, next) =>
  gameController.Authenticate(req, res, next))

// routes
app.post('/api/create', (req, res) =>
  gameController.Create(req, res))
  
  // app.post('/api/join', (req, res) =>
  // gameController.Join(req, res))
  
  // @ts-expect-error
  app.ws('/api/connect', (ws, req) =>
  gameController.Connect(ws, req))
  
app.post('/api/current', (req, res) =>
  gameController.Current(req, res))
  
app.post('/api/join', (req, res) =>
  gameController.Join(req, res))

app.all('/api/*', (req, res) => console.log(req, res))

app.get('*', (_, res) =>
  res.sendFile(path.join(__dirname, '..', 'web', 'dist', 'index.html')))

const server = app.listen(3000, '0.0.0.0', function () {
  // @ts-expect-error
  const address = server.address()!.address
  // @ts-expect-error
  const port = server.address()!.port

  console.log('server is listening at http://%s:%s', address, port)
})
