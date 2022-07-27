
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import Client from '../../api/client'

const client = new Client()

export default function DeclineInsurance () {
  const dispatch = useDispatch<AppDispatch>()
  const game = useSelector((state: RootState) => state.game)

  const handleClick = () => {
    if (game) client.DeclineInsurance(game.session)
  }

  return (
    <div className='uk-margin'>
      <button onClick={handleClick} className='uk-button uk-border-rounded uk-width-expand uk-button-default'>DECLINE INSURANCE</button>
    </div>
  )
}
