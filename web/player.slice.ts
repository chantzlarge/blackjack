import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Player from '../internal/player'
import { 
  GetCurrentPlayerInput, 
  GetCurrentPlayerOutput,
  LeaveTableInput, 
  LeaveTableOutput,
 } from '../internal/player.service'
import API from './api'

const api = new API()

export const getCurrentPlayer = createAsyncThunk('players/getCurrentPlayer', async (input: GetCurrentPlayerInput) => {
  const output: GetCurrentPlayerOutput = await api.GetCurrentPlayer(input)

  return output.Ok ? output.Response : null
})

export const leaveTable = createAsyncThunk('players/leaveTable', async (input: LeaveTableInput) => {
  const output: LeaveTableOutput = await api.LeaveTable(input)

  return output.Ok ? output.Response : null
})

export const playerSlice = createSlice({
  name: 'players',
  initialState: null as Player | null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentPlayer.fulfilled, (_, action) => action.payload)
    builder.addCase(leaveTable.fulfilled, () => null)
  }
})
