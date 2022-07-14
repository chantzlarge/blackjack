import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { AppDispatch, RootState } from './store'
import CreateOrJoinTable from './components/create-or-join-table'
import Table from './components/table'
import { createSession, getSession, updateSession } from './session.slice'
import { getTable } from './table.slice'
import { createPlayer, currentPlayer, getPlayer } from './player.slice'

export default function App() {
  const [cookies, setCookie] = useCookies(['session-id'])
  const dispatch = useDispatch<AppDispatch>()
  const player = useSelector((state: RootState) => state.player)
  const session = useSelector((state: RootState) => state.session)
  const table = useSelector((state: RootState) => state.table)

  useEffect(() => {
    console.log('player', player)
    console.log('session', session)
    console.log('table', table)

    if (!session && !cookies['session-id']) {
      dispatch(createSession({
        Parameters: {}
      }))
    } else if (!session && cookies['session-id']) {
      dispatch(getSession({
        Parameters: {
          SessionId: cookies['session-id']
        }
      }))
    } else if (session) {
      setCookie('session-id', session.Id)

      if (!table && !player) {
        dispatch(currentPlayer({
          Parameters: {
            SessionId: session.Id,
          }
        }))
      } else if (player && !table) {
        dispatch(getTable({
          Parameters: {
            TableId: player.TableId,
          }
        }))
      } else if (table && !player) {
        dispatch(createPlayer({
          Parameters: {
            SessionId: session.Id,
            TableId: table.Id,
          }
        }))
      }
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
