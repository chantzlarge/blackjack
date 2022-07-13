import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Table from '../internal/table/table'
import { GetPlayerInput } from '../internal/table/table.service'
import API from './api'

const api = new API()

export const getPlayer = createAsyncThunk('tables/getPlayer', async (input: GetPlayerInput) => {
  const output = await api.GetPlayer(input)

  const player = output.Response

  return player ? player : null
})

export const playerSlice = createSlice({
  name: 'tables',
  initialState: null as Table | null,
  reducers: {
    updateTable(state, action) {
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPlayer.fulfilled, (state, action) => {
      const player = action.payload

      return state
    })
  }
})
