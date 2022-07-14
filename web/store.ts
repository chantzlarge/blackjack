import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { playerSlice } from './player.slice'
import { sessionSlice } from './session.slice'
import { tableSlice } from './table.slice'

const reducers = {
  player: playerSlice.reducer,
  session: sessionSlice.reducer,
  table: tableSlice.reducer
}

const reducer = combineReducers(reducers)

export const store = configureStore({
  reducer: reducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
