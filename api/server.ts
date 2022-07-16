import express from 'express'
import cors from 'cors'
import path from 'path'

// session imports
import SessionController from '../internal/session/session.controller'
import SessionRepository from '../internal/session/session.repository'
import SessionService from '../internal/session/session.service'

// table imports
import TableController from '../internal/table/table.controller'
import TableRepository from '../internal/table/table.repository'
import TableService from '../internal/table/table.service'

const app = express()
const expressWs = require('express-ws')(app)

// repositories
const sessionRepository = new SessionRepository()
const tableRepository = new TableRepository()

// services
const sessionService = new SessionService(sessionRepository)
const tableService = new TableService(sessionRepository, tableRepository)

// controllers
const sessionController = new SessionController(sessionService)
const tableController = new TableController(tableService)

// middleware
app.use(express.json())
app.use(cors())
app.use('/', express.static(path.join(__dirname, 'web', 'dist')))
app.use((req, res, next) =>
  sessionController.AuthenticateSession(req, res, next))

// routes
app.get('/api/session', (req, res) =>
  sessionController.GrantSession(req, res))

app.post('/api/session/current', (req, res) =>
  sessionController.GetCurrentSession(req, res))

app.post('/api/table/create', (req, res) =>
  tableController.CreateTable(req, res))

// @ts-expect-error
app.ws('/api/table/connect', (ws, req) =>
  tableController.Connect(ws, req))

app.post('/api/table/create', (req, res) =>
  tableController.CreateTable(req, res))

app.post('/api/table/current', (req, res) =>
  tableController.GetCurrentTable(req, res))

app.post('/api/table/join', (req, res) =>
  tableController.JoinTable(req, res))

app.all('/api/*', (req, res) => console.log(req, res))

app.get('*', (_, res) =>
  res.sendFile(path.join(__dirname, 'web', 'dist', 'index.html')))

const server = app.listen(3000, '0.0.0.0', function () {
  // @ts-expect-error
  const address = server.address()!.address
  // @ts-expect-error
  const port = server.address()!.port

  console.log('server is listening at http://%s:%s', address, port)
})
