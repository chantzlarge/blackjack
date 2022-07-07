import { sessionReducer, sessionService } from 'redux-react-session'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tableSlice } from './table.slice'

const reducers = {
  session: sessionReducer,
  table: tableSlice.reducer
}

const reducer = combineReducers(reducers)

export const store = configureStore({
  reducer: reducer,
})

sessionService.initSessionService(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
