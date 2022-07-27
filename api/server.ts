import express from 'express'
import cors from 'cors'
import path from 'path'
import SessionRepository from '../lib/session/session.repository'
import TableRepository from '../lib/table/table.repository'
import GameService from '../lib/game/game.service'
import GameController from '../lib/game/game.controller'

const server = express()
const expressWs = require('express-ws')(server)

// repositories
const sessionRepository = new SessionRepository()
const tableRepository = new TableRepository()

// services
const gameService = new GameService(sessionRepository, tableRepository)

// controllers
const gameController = new GameController(gameService)

// middleware
server.use(express.json())
server.use(cors())
server.use('/', express.static(path.join(__dirname, '..', 'web', 'dist')))
server.use((req, res, next) =>
  gameController.Authenticate(req, res, next))

// routes
server.post('/api/create', (req, res) =>
  gameController.Create(req, res))

// @ts-expect-error
server.ws('/api/connect', (ws, req) =>
  gameController.Connect(ws, req))

server.post('/api/current', (req, res) =>
  gameController.Current(req, res))

server.post('/api/join', (req, res) =>
  gameController.Join(req, res))

server.all('/api/*', (req, res) => 
  console.log(req, res))

server.get('*', (_, res) =>
  res.sendFile(path.join(__dirname, '..', 'web', 'dist', 'index.html')))

export default server