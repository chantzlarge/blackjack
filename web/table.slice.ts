import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Table from '../internal/table/table'
import Session from '../internal/session/session'
import { useDispatch } from 'react-redux'
import API from './api'

const api = new API()

export const createTable = createAsyncThunk('tables/createTable', async (session: Session) => {
  console.log('creating table...')

  const table = api.CreateTable()

  return table
})

export const joinTable = createAsyncThunk('tables/joinTable', async (session: Session) => {
  console.log('joining table...')

  const response = await fetch('http://localhost:3000/api/table/join', {
    body: JSON.stringify(session),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })

  const data = await response.json()

  return data
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

      console.log(`created table: ${JSON.stringify(table)}`)

      state = table

      return state
    })
    builder.addCase(joinTable.fulfilled, (state, action) => {
      const table = action.payload

      state = table

      console.log(`joined table: ${JSON.stringify(table)}`)

      return state
    })
  }
})

const { updateTable } = tableSlice.actions
