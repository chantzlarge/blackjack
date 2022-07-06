import { createAction, createReducer } from '@reduxjs/toolkit'
import Table from '../internal/table/table'

export const createTable = createAction<Table>('table/createTable')

export const tableReducer = createReducer<Table | null>(null, (builder) => {
  builder.addCase(createTable, (state, action) => {
    const t = new Table()
    state = t
  })
})
