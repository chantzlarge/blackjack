import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { response } from 'express'
import Table from '../internal/table/table'

const ws = new WebSocket('ws://localhost:3001')

ws.onopen = (ev) => {
  console.log(ev)
}

ws.onmessage = (ev) => {
  console.log(ev)
}

export const createTable = createAsyncThunk('tables/createTable', async (sessionKey: string) => {
  const response = await fetch('http://localhost:3001/api/table/create', {
    body: JSON.stringify({
      sessionKey: sessionKey
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })

  const data = await response.json()

  return data
})

export const tableSlice = createSlice({
  name: 'tables',
  initialState: null as Table | null,
  reducers: {
    joinTable(state, action) {
      ws.send(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createTable.fulfilled, (state, action) => {
      return state = action.payload
    })
  }
})

export const { joinTable } = tableSlice.actions
