import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Table from '../internal/table/table'
import Session from '../internal/session/session'

const ws = new WebSocket('ws://localhost:3000/socket')

ws.onopen = (event) => {
  console.log(event)
}

ws.onmessage = (event) => {
  console.log(event)
}

export const createTable = createAsyncThunk('tables/createTable', async (session: Session) => {
  console.log('creating table...')

  const response = await fetch('http://localhost:3000/api/table/create', {
    // body: JSON.stringify(session),
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // },
    method: 'POST'
  })

  const data = await response.json()

  return data
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
  reducers: {},
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
