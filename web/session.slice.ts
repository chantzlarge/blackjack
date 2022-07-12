import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Session from '../internal/session/session'
import API from './api'

const api = new API()

export const createSession = createAsyncThunk('sessions/createSession', async () => {
  console.log('creating session...')

  const session = api.CreateSession()

  return session
})

export const currentSession = createAsyncThunk('sessions/currentSession', async (sessionId: string) => {
  console.log(`getting current session... ${sessionId}`)

  const session = api.CurrentSession()

  return session
})

export const sessionSlice = createSlice({
  name: 'sessions',
  initialState: null as Session | null,
  reducers: {
    // TBD
  },
  extraReducers: (builder) => {
    builder.addCase(createSession.fulfilled, (state, action) => {
      console.log(`created session... ${JSON.stringify(action.payload)}`)

      state = action.payload

      return state
    })
    builder.addCase(currentSession.fulfilled, (state, action) => {
      console.log(`got current session... ${action.payload}`)

      state = action.payload

      return state
    })
  }
})
