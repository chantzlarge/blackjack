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
  const [cookies, setCookie, removeCookie] = useCookies(['session-id'])
  const dispatch = useDispatch<AppDispatch>()
  const player = useSelector((state: RootState) => state.player)
  const session = useSelector((state: RootState) => state.session)
  const table = useSelector((state: RootState) => state.table)

  useEffect(() => {
    console.log('player', player)
    console.log('session', session)
    console.log('table', table)

    const sessionId = cookies['session-id']

    console.log('session-id', sessionId)

    if (!session && !sessionId) {
      console.log('granting session...')
      dispatch(grantSession({
        Parameters: {
          SessionId: sessionId
        }
      }))
    } else if (!session && sessionId) {
      console.log('getting session...')
      dispatch(getCurrentSession({
        Parameters: { SessionId: sessionId }
      }))
    } else if (session && !sessionId) {
      console.log('setting session-id cookie...')
      setCookie('session-id', session.Id)
    } else if (session && sessionId) {
      if (!player) {
        console.log('getting current player...')
        dispatch(getCurrentPlayer({
          Parameters: {
            SessionId: session.Id
          }
        }))
      } else if (!table) {
        console.log('getting current table...')
        dispatch(getCurrentTable({
          Parameters: {
            SessionId: session.Id
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
