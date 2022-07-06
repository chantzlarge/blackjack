import express from 'express'
const app = express()
const expressWs = require('express-ws')(app)

// services
import TableService from '../internal/table/table.service'

const tableService = new TableService()

app.get('/table', function(req, res) {
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
