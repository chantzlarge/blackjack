import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Table from '../internal/table'

import {
  CreateTableInput,
  GetCurrentTableInput,
  JoinTableInput
} from '../internal/table.service'

import API from '../api/client'

const api = new API()

export const createTable = createAsyncThunk('tables/createTable', async (input: CreateTableInput) => {
  const output = await api.CreateTable(input)

  return output.Ok ? output.Response! : null
})

export const getCurrentTable = createAsyncThunk('tables/getCurrentTable', async (input: GetCurrentTableInput) => {
  const output = await api.GetCurrentTable(input)

  return output.Ok ? output.Response! : null
})

export const joinTable = createAsyncThunk('tables/joinTable', async (input: JoinTableInput) => {
  const output = await api.JoinTable(input)

  return output.Ok ? output.Response! : null
})

export const tableSlice = createSlice({
  name: 'tables',
  initialState: null as Table | null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTable.fulfilled, (_, action) => action.payload)
    builder.addCase(getCurrentTable.fulfilled, (_, action) => action.payload)
    builder.addCase(joinTable.fulfilled, (_, action) => action.payload)
  }
})
