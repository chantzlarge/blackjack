import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Game from '../../internal/game/game'
import Client from '../../api/client'
import Session from '../../internal/session/session'

const client = new Client()

export const createGame = createAsyncThunk('game/createGame', async () => {
  return client.Create()
})

export const currentGame = createAsyncThunk('game/currentGame', async (session: Session) => {
  return client.Current(session)
})

export const joinGame = createAsyncThunk('game/joinGame', async (args: { code: string }) => {
  return client.Join(args.code)
})

export const leaveGame = createAsyncThunk('game/leaveGame', async (session: Session) => {
  client.Leave(session)

  return null
})

export const gameSlice = createSlice({
  name: 'game',
  initialState: null as Game | null,
  reducers: {
    updateGame(_, action) {
      return action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createGame.fulfilled, (_, action) => action.payload)
    builder.addCase(currentGame.fulfilled, (_, action) => action.payload)
    builder.addCase(joinGame.fulfilled, (_, action) => action.payload)
    builder.addCase(leaveGame.fulfilled, (_, action) => action.payload)
  }
})

export const { updateGame } = gameSlice.actions