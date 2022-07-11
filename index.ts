import express from 'express'
import cors from 'cors'
import path from 'path'
import SessionRepository from './internal/session/session.repository'
import SessionService from './internal/session/session.service'
import TableRepository from './internal/table/table.repository'
import TableService from './internal/table/table.service'
import AuthenticateSessionHandler from './api/authenticate-session-handler'
import CreateTableHandler from './api/create-table-handler'
import CreateSessionHandler from './api/create-session-handler'
import CurrentSessionHandler from './api/current-session-handler'
import JoinTableHandler from './api/join-table-handler'
import WebSocketHandler from './api/websocket-handler'

const app = express()
const expressWs = require('express-ws')(app)

// repositories
const sessionRepository = new SessionRepository()
const tableRepository = new TableRepository()

// services
const sessionService = new SessionService(sessionRepository)
const tableService = new TableService(tableRepository)

// handlers
const authenticateSessionHandler = new AuthenticateSessionHandler(sessionService)
const createSessionHandler = new CreateSessionHandler(sessionService)
const createTableHandler = new CreateTableHandler(tableService)
const currentSessionHandler = new CurrentSessionHandler(sessionService)
const joinTableHandler = new JoinTableHandler(tableService)
const webSocketHandler = new WebSocketHandler(tableService)

// middleware
app.use(express.json())
app.use(cors())
app.use('/', express.static(path.join(__dirname, 'web', 'dist')))
app.use((req, res, next) =>
  authenticateSessionHandler.Handle(req, res, next))

// routes
app.get('/api/session/current', (req, res) =>
  currentSessionHandler.Handle(req, res))

app.post('/api/session/create', (req, res) =>
  createSessionHandler.Handle(req, res))

app.post('/api/table/create', (req, res) =>
  createTableHandler.Handle(req, res))

app.post('/api/table/join', (req, res) =>
  joinTableHandler.Handle(req, res))

// @ts-expect-error
app.ws('/socket', (ws, req) =>
  webSocketHandler.Handle(ws, req))

app.get('*', (_, res) =>
  res.sendFile(path.join(__dirname, 'web', 'dist', 'index.html')))

const server = app.listen(3000, '0.0.0.0', function () {
  // @ts-expect-error
  const address = server.address()!.address
  // @ts-expect-error
  const port = server.address()!.port

  console.log('server is listening at http://%s:%s', address, port)
})
