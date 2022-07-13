import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Session from '../internal/session/session'
import { GetSessionInput, GrantSessionInput } from '../internal/session/session.service'
import API from './api'

const api = new API()

export const getSession = createAsyncThunk('sessions/getSession', async (input: GetSessionInput) => {
  const output = await api.GetSession(input)
  
  console.log(`output: ${JSON.stringify(output)}`)
  
  return output.Ok ? output.Response : null
})

export const grantSession = createAsyncThunk('sessions/grantSession', async (input: GrantSessionInput) => {
  const output = await api.GrantSession(input)
  
  console.log(`output: ${JSON.stringify(output)}`)
  
  return output.Ok ? output.Response : null
})

export const sessionSlice = createSlice({
  name: 'sessions',
  initialState: null as Session | null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSession.fulfilled, (_, action) => {
      const session = action.payload

      return session
    })
    builder.addCase(grantSession.fulfilled, (_, action) => {
      const session = action.payload

      return session
    })
  }
})
