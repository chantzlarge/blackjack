import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { gameSlice } from './slices/game.slice'

const reducers = {
  game: gameSlice.reducer,
}

const reducer = combineReducers(reducers)

export const store = configureStore({
  reducer: reducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
