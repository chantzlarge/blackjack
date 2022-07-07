import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { response } from 'express'
const ws = new WebSocket('ws://localhost:3001')

ws.onopen = (ev) => {
  console.log(ev)
}

ws.onmessage = (ev) => {
  console.log(ev)
}

export const createTable = createAsyncThunk('tables/createTable', async () => {
  const response = await fetch('http://localhost:3001/api/table/create', { method: 'POST'})
  const data = await response.json()
  
  return data
})

export const tableSlice = createSlice({
  name: 'tables',
  initialState: [],
  reducers: {
    joinTable(state, action) {
      ws.send(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createTable.fulfilled, (state, action) => {
      console.log(action.payload)
    })
  }
})

export const { joinTable } = tableSlice.actions
