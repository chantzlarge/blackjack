import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Player from '../internal/player'
import {
  GetCurrentPlayerInput,
  GetCurrentPlayerOutput,
  LeaveTableInput,
  LeaveTableOutput,
  BetInput,
  BetOutput,
  HitOutput,
  HitInput,
  StandInput,
  StandOutput
} from '../internal/player.service'
import API from '../api/client'

const api = new API()

export const bet = createAsyncThunk('players/bet', async (input: BetInput) => {
  const output: BetOutput = await api.Bet(input)

  console.log(output)

  return output.Ok ? output.Response : null
})

export const getCurrentPlayer = createAsyncThunk('players/getCurrentPlayer', async (input: GetCurrentPlayerInput) => {
  const output: GetCurrentPlayerOutput = await api.GetCurrentPlayer(input)

  return output.Ok ? output.Response : null
})

export const hit = createAsyncThunk('players/hit', async (input: HitInput) => {
  const output: HitOutput = await api.Hit(input)

  console.log(output)

  return output.Ok ? output.Response : null
})

export const stand = createAsyncThunk('players/stand', async (input: StandInput) => {
  const output: StandOutput = await api.Stand(input)

  console.log(output)

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
    builder.addCase(bet.fulfilled, (_, action) => action.payload)
    builder.addCase(getCurrentPlayer.fulfilled, (_, action) => action.payload)
    builder.addCase(hit.fulfilled, (_, action) => action.payload)
    builder.addCase(leaveTable.fulfilled, () => null)
    builder.addCase(stand.fulfilled, (_, action) => action.payload)
  }
})
