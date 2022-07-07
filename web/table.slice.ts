import { createSlice } from '@reduxjs/toolkit'
const ws = new WebSocket('ws://localhost:3001')

ws.onopen = (ev) => {
  console.log(ev)
}

ws.onmessage = (ev) => {
  console.log(ev)
}

export const tableSlice = createSlice({
  name: 'tables',
  initialState: [],
  reducers: {
    createTable(state, action) {
      ws.send('')
    },
    joinTable(state, action) {
      ws.send(action.payload)
    }
  }
})

export const { createTable, joinTable } = tableSlice.actions
