import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Session from '../internal/session/session'

export const createSession = createAsyncThunk('sessions/createSession', async () => {
  console.log('creating session...')

  const response = await fetch('http://172.20.10.3:3000/api/session/create', { method: 'POST' })
  const data = await response.json()

  return data
})

export const getSession = createAsyncThunk('sessions/getSession', async (sessionId: string) => {
  console.log(`getting session... ${sessionId}`)

  const response = await fetch('http://172.20.10.3:3000/api/session/current', { method: 'GET' })
  const data = await response.json()

  return data
})

export const sessionSlice = createSlice({
  name: 'sessions',
  initialState: null as Session | null,
  reducers: {
    // TBD
  },
  extraReducers: (builder) => {
    builder.addCase(createSession.fulfilled, (state, action) => {
      console.log(`created session... ${action.payload}`)
      console.log(`previous state: ${JSON.stringify(state)}`)

      return state = action.payload
    })
    builder.addCase(getSession.fulfilled, (state, action) => {
      console.log(`got session... ${action.payload}`)
      console.log(`previous state: ${JSON.stringify(state)}`)

      return state = action.payload
    })
  }
})
