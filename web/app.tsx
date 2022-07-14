import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { AppDispatch, RootState } from './store'
import CreateOrJoinTable from './components/create-or-join-table'
import Table from './components/table'
import { getCurrentPlayer } from './player.slice'
import { getCurrentSession, grantSession } from './session.slice'
import { getCurrentTable } from './table.slice'

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

    if (!cookies['session-id'] && !session) {
      dispatch(grantSession())
    } else if (cookies['session-id'] && !session) {
      dispatch(getCurrentSession({
        Parameters: {
          SessionId: cookies['session-id']
        }
      }))
    } else if (!cookies['session-id'] && session) {
      setCookie('session-id', session.Id)
    }

    if (session && !player) {
      dispatch(getCurrentPlayer({
        Parameters: {
          SessionId: session.Id
        }
      }))
    }

    if (session && !table) {
      dispatch(getCurrentTable({
        Parameters: {
          SessionId: session.Id
        }
      }))
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
