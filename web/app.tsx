import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { AppDispatch, RootState } from './store'
import Session from '../internal/session/session'
import { createSession, getSession } from './session.slice'
import CreateOrJoinTable from './components/create-or-join-table'
import Card from './components/card'
import Table from './components/table'

export default function App() {
  const dispatch = useDispatch<AppDispatch>()
  const [cookies, setCookie] = useCookies(['session-id'])

  const session = useSelector<RootState, Session | null>((state) => {
    return state.session
  })

  useEffect(() => {
    console.log(`session: ${JSON.stringify(session)}`)
    console.log(`cookies['session-id']: ${cookies['session-id']}`)

    if (session && !cookies['session-id']) {
      setCookie('session-id', session.Id, { path: '/' })
    } else if (!session && cookies['session-id']) {
      dispatch(getSession(cookies['session-id']))
    } else if (!session && !cookies['session-id']) {
      dispatch(createSession())
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
