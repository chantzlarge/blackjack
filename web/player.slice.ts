import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { response } from 'express'
const ws = new WebSocket('ws://172.20.10.3:3000/socket')

ws.onopen = (ev) => {
  console.log(ev)
}

ws.onmessage = (ev) => {
  console.log(ev)
}

export const currentPlayer = createAsyncThunk('players/currentPlayer', async () => {
  const response = await fetch('http://172.20.10.3:3000/api/player/current', { method: 'GET' })
  const data = await response.json()

  return data
})

export const playerSlice = createSlice({
  name: 'players',
  initialState: [],
  reducers: {
    joinPlayer (state, action) {
      ws.send(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(currentPlayer.fulfilled, (state, action) => {
      console.log(action.payload)
    })
  }
})

export const { joinPlayer } = playerSlice.actions
