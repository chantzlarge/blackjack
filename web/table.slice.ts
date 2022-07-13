import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Table from '../internal/table/table'

import {
  CreateTableInput,
  GetPlayerInput,
  GetTableInput,
  JoinTableInput,
} from '../internal/table/table.service'
import Session from '../internal/session/session'
import TableClient from './api'

const tableClient = new TableClient()

export const createTable = createAsyncThunk('tables/createTable', async (input: CreateTableInput) => {
  const output = await tableClient
    .CreateTable(input)

  console.log(output)

  const table = output.Response

  return table ? table : null
})

export const getTable = createAsyncThunk('tables/getTable', async (props: { input: GetTableInput, session: Session }) => {
  const input = props.input
  const session = props.session


  const output = await tableClient
    .WithSession(session)
    .GetTable(input)

  console.log(output)

  const table = output.Response

  return table ? table : null
})

export const joinTable = createAsyncThunk('tables/joinTable', async (props: { input: JoinTableInput, session: Session }) => {
  const input = props.input
  const session = props.session

  const output = await tableClient
    .WithSession(session)
    .JoinTable(input)

  console.log(output)

  const table = output.Response

  return table ? table : null
})

export const tableSlice = createSlice({
  name: 'tables',
  initialState: null as Table | null,
  reducers: {
    updateTable(state, action) {
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createTable.fulfilled, (state, action) => {
      const table = action.payload

      state = table

      return state
    })
    builder.addCase(getTable.fulfilled, (state, action) => {
      const table = action.payload

      state = table

      return state
    })
    builder.addCase(joinTable.fulfilled, (state, action) => {
      const table = action.payload

      state = table

      return state
    })
  }
})

const { updateTable } = tableSlice.actions
