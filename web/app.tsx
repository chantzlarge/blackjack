import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { AppDispatch, RootState } from './store'
import CreateOrJoinTable from './components/create-or-join-table'
import Table from './components/table'
import { currentGame, updateGame } from './slices/game.slice'
import Client, { GameChangeEvent } from '../api/client'
import Session from '../lib/session/session'

const client = new Client()

export default function App () {
  const [cookies, setCookie, removeCookie] = useCookies(['playerId', 'sessionId', 'sessionSecret', 'tableId'])
  const dispatch = useDispatch<AppDispatch>()
  const game = useSelector((state: RootState) => state.game)

  useEffect(() => {
    console.log(game)

    client.addEventListener('gameChange', (ev: any) => 
      dispatch(updateGame(ev.game)))

    if (
      !game && [
        cookies.playerId,
        cookies.tableId,
        cookies.sessionId,
        cookies.sessionSecret
      ].every(c => !!c)
    ) {
      dispatch(currentGame(new Session(
        cookies.playerId,
        cookies.tableId,
        cookies.sessionId,
        cookies.sessionSecret
      )))
    } else if (game) {
      setCookie('playerId', game.player.id, { path: '/' })
      setCookie('tableId', game.table.id, { path: '/' })
      setCookie('sessionId', game.session.id, { path: '/' })
      setCookie('sessionSecret', game.session.secret, { path: '/' })
    } else {
      removeCookie('playerId', { path: '/' })
      removeCookie('tableId', { path: '/' })
      removeCookie('sessionId', { path: '/' })
      removeCookie('sessionSecret', { path: '/' })
    }
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateOrJoinTable />} />
        <Route path='/table' element={<Table />} />
      </Routes>
    </BrowserRouter>
  )
}
