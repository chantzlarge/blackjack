import express from 'express'
import cors from 'cors'
import path from 'path'
import SessionController from './internal/session/session.controller'
import SessionRepository from './internal/session/session.repository'
import SessionService from './internal/session/session.service'
import TableRepository from './internal/table/table.repository'
import TableService from './internal/table/table.service'
import TableController from './internal/table/table.controller'
import TablePublisher from './internal/table/table.publisher'

const app = express()
const expressWs = require('express-ws')(app)

// publishers
const tablePublisher = new TablePublisher()

// repositories
const sessionRepository = new SessionRepository()
const tableRepository = new TableRepository()

// services
const sessionService = new SessionService(sessionRepository)
const tableService = new TableService(tablePublisher, tableRepository)

// controllers
const sessionController = new SessionController(sessionService)
const tableController = new TableController(sessionService, tableService)

// middleware
app.use(express.json())
app.use(cors())
app.use('/', express.static(path.join(__dirname, 'web', 'dist')))
app.use((req, res, next) =>
  sessionController.AuthenticateSession(req, res, next))

// routes
app.get('/api/session/:sessionId', (req, res) =>
  sessionController.GetSession(req, res))

app.post('/api/session/grant', (req, res) =>
  sessionController.GrantSession(req, res))

app.post('/api/table/create', (req, res) =>
  tableController.CreateTable(req, res))

// @ts-ignore
app.ws('/api/table/connect', (ws, req) =>
  tableController.Connect(ws, req))

app.get('/api/table/:tableId/player/:playerId', (req, res) =>
  tableController.GetPlayer(req, res))

app.get('/api/table/:tableId', (req, res) =>
  tableController.GetTable(req, res))

app.post('/api/table/join', (req, res) =>
  tableController.JoinTable(req, res))

app.get('*', (_, res) =>
  res.sendFile(path.join(__dirname, 'web', 'dist', 'index.html')))

const server = app.listen(3000, '0.0.0.0', function () {
  // @ts-expect-error
  const address = server.address()!.address
  // @ts-expect-error
  const port = server.address()!.port

  console.log('server is listening at http://%s:%s', address, port)
})
