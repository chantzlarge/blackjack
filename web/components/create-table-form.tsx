import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { useNavigate } from 'react-router-dom'
import { createGame } from '../slices/game.slice'

export default function CreateTableForm () {
  const [inputs, setInputs] = useState({})
  const dispatch = useDispatch<AppDispatch>()

  const handleChange = (event: { target: { name: any, value: any } }) => {
    setInputs(values => ({ ...values, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    dispatch(createGame())
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='uk-margin'>
          <button className='uk-button uk-button-primary uk-width-1-1 uk-border-rounded'>CREATE TABLE</button>
        </div>
      </form>
    </div>
  )
}
