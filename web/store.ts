import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { sessionSlice } from './session.slice'
import { tableSlice } from './table.slice'

const reducers = {
  session: sessionSlice.reducer,
  table: tableSlice.reducer
}

const reducer = combineReducers(reducers)

export const store = configureStore({
  reducer: reducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
