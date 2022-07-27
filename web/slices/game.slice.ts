import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Game from '../../lib/game/game'
import Client from '../../api/client'
import Session from '../../lib/session/session'

const client = new Client()

export const createGame = createAsyncThunk('game/createGame', async () => {
  return await client.Create()
})

export const currentGame = createAsyncThunk('game/currentGame', async (session: Session) => {
  return await client.Current(session)
})

export const joinGame = createAsyncThunk('game/joinGame', async (args: { code: string }) => {
  return await client.Join(args.code)
})

export const leaveGame = createAsyncThunk('game/leaveGame', async (session: Session) => {
  client.Leave(session)

  return null
})

export const gameSlice = createSlice({
  name: 'game',
  initialState: null as Game | null,
  reducers: {
    updateGame (state, action) {
      if (state && state.session.playerId === action.payload.session.playerId) {
        console.log(state.session.playerId === action.payload.session.playerId)
        
        state = action.payload
      } else if (state) {
        console.log(state)
        state.table = action.payload.table
      }
      return state
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
