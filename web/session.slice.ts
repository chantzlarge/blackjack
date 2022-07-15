import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Session from '../internal/session'
import { 
  GetCurrentSessionInput, 
  GetCurrentSessionOutput, 
  GrantSessionInput, 
  GrantSessionOutput, 
} from '../internal/session.service'
import API from './api'

const api = new API()

export const getCurrentSession = createAsyncThunk('sessions/getCurrentSession', async (input: GetCurrentSessionInput) => {
  const output: GetCurrentSessionOutput = await api.GetCurrentSession(input)

  return output.Ok ? output.Response : null
})

export const grantSession = createAsyncThunk('sessions/grantSession', async (input?: GrantSessionInput) => {
  const output: GrantSessionOutput = await api.GrantSession(input)

  return output.Ok ? output.Response : null
})

export const sessionSlice = createSlice({
  name: 'sessions',
  initialState: null as Session | null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentSession.fulfilled, (_, action) => action.payload)
    builder.addCase(grantSession.fulfilled, (_, action) => action.payload)
  }
})
