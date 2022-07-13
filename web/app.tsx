import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { AppDispatch, RootState } from './store'
import Session from '../internal/session/session'
import CreateOrJoinTable from './components/create-or-join-table'
import Table from './components/table'
import { grantSession, getSession } from './session.slice'
import { SessionContext } from './session.context'
import { Root } from 'react-dom/client'

export default function App() {
  const dispatch = useDispatch<AppDispatch>()
  const [cookies, setCookie] = useCookies(['session-id'])

  const session = useSelector((state: RootState) => state.session)

  useEffect(() => {
    console.log(`session: ${JSON.stringify(session)}`)

    if (session) {
      setCookie('session-id', session.Id, { path: '/' })
    } else if (!session && cookies['session-id']) {
      dispatch(getSession({ Parameters: { SessionId: cookies['session-id'] } }))
    } else {
      dispatch(grantSession({ Parameters: {} }))
    }
  })

  return (
    <SessionContext.Provider value={session}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CreateOrJoinTable />} />
          <Route path='/table' element={<Table />} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  )
}
