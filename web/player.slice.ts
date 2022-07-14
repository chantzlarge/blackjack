import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Player from '../internal/player/player'
import { 
  CreatePlayerInput, 
  CreatePlayerOutput, 
  CurrentPlayerInput, 
  CurrentPlayerOutput, 
  GetPlayerInput,
  GetPlayerOutput,
 } from '../internal/player/player.service'
import API from './api'

const api = new API()

export const createPlayer = createAsyncThunk('players/createPlayer', async (input: CreatePlayerInput) => {
  const output: CreatePlayerOutput = await api.CreatePlayer(input)

  console.log('created player:', output)

  return output.Ok ? output.Response : null
})

export const currentPlayer = createAsyncThunk('players/currentPlayer', async (input: CurrentPlayerInput) => {
  const output: CurrentPlayerOutput = await api.CurrentPlayer(input)

  console.log('current player:', output)

  return output.Ok ? output.Response : null
})

export const getPlayer = createAsyncThunk('player/getPlayer', async (input: GetPlayerInput) => {
  console.log(input)

  const output: GetPlayerOutput = await api.GetPlayer(input)

  console.log('got player:', output)

  return output.Ok ? output.Response : null
})

export const playerSlice = createSlice({
  name: 'players',
  initialState: null as Player | null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPlayer.fulfilled, (_, action) => action.payload)
    builder.addCase(currentPlayer.fulfilled, (_, action) => action.payload)
    builder.addCase(getPlayer.fulfilled, (_, action) => action.payload)
  }
})
