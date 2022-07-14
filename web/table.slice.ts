import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Table from '../internal/table/table'

import {
  CreateTableInput,
  GetTableInput,
  JoinTableInput,
} from '../internal/table/table.service'

import API from './api'

const api = new API()

export const createTable = createAsyncThunk('tables/createTable', async (input: CreateTableInput) => {
  const output = await api.CreateTable(input)

  console.log(`created table: ${JSON.stringify(output)}`)
  
  return output.Ok ? output.Response! : null
})

export const getTable = createAsyncThunk('tables/getTable', async (input: GetTableInput) => {
  const output = await api.GetTable(input)
  
  console.log(`got table: ${JSON.stringify(output)}`)
  
  return output.Ok ? output.Response! : null
})

export const joinTable = createAsyncThunk('tables/joinTable', async (input: JoinTableInput) => {
  const output = await api.JoinTable(input)
  
  console.log(`joined table: ${JSON.stringify(output)}`)

  return output.Ok ? output.Response! : null
})

export const tableSlice = createSlice({
  name: 'tables',
  initialState: null as Table | null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTable.fulfilled, (_, action) => action.payload)
    builder.addCase(getTable.fulfilled, (_, action) => action.payload)
    builder.addCase(joinTable.fulfilled, (_, action) => action.payload)
  }
})
