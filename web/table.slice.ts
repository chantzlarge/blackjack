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
    createTable (state, action) {
      const m = 'message'
      console.log(m)
      ws.send(m)
    },
    joinTable (state, action) {
      const m = 'message'
      console.log(m)
      ws.send(m)
    }
  }
})

export const { createTable, joinTable } = tableSlice.actions
