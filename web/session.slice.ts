import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Session from '../internal/session/session'
import { GetSessionInput, CreateSessionInput, UpdateSessionInput } from '../internal/session/session.service'
import API from './api'

const api = new API()

export const getSession = createAsyncThunk('sessions/getSession', async (input: GetSessionInput) => {
  const output = await api.GetSession(input)

  console.log(`get session: ${JSON.stringify(output)}`)


  return output.Ok ? output.Response : null
})

export const createSession = createAsyncThunk('sessions/createSession', async (input: CreateSessionInput) => {
  const output = await api.CreateSession(input)

  console.log(`create session: ${JSON.stringify(output)}`)


  return output.Ok ? output.Response : null
})

export const updateSession = createAsyncThunk('sessions/updateSession', async (input: UpdateSessionInput) => {
  const output = await api.UpdateSession(input)

  console.log(`update session: ${JSON.stringify(output)}`)

  await new Promise(r => setTimeout(r, 2000));

  return output.Ok ? output.Response : null
})

export const sessionSlice = createSlice({
  name: 'sessions',
  initialState: null as Session | null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSession.fulfilled, (_, action) => action.payload)
    builder.addCase(createSession.fulfilled, (_, action) => action.payload)
    builder.addCase(updateSession.fulfilled, (_, action) => action.payload)
  }
})
