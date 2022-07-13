import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { createTable } from '../table.slice'
import Session from '../../internal/session/session'
import { useNavigate } from 'react-router-dom'
import { SessionContext } from '../session.context'

export default function CreateTableForm() {
  const [inputs, setInputs] = useState({})
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const session = useSelector((state: RootState) => state.session)

  const handleChange = (event: { target: { name: any, value: any } }) => {
    setInputs(values => ({ ...values, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    dispatch(createTable({
      Parameters: {
        SessionId: session?.Id!,
      },
    }))

    navigate('/table')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='uk-margin'>
          {session && <button className='uk-button uk-button-primary uk-width-expand uk-border-rounded'>CREATE TABLE</button>}
        </div>
      </form>
    </div>
  )
}
