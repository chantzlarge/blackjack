import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import Client from '../../api/client'

const client = new Client()

export default function PlaceBet () {
  const dispatch = useDispatch<AppDispatch>()
  const game = useSelector((state: RootState) => state.game)

  const handleClick = (amount: number) => {
    if (game) client.Bet(game.session, amount)
  }

  return (
    <div className='uk-grid-small uk-child-width-1-2' data-uk-grid>
      <div>
        <button onClick={() => handleClick(5.00)} className='uk-button uk-width-expand uk-border-rounded uk-button-default'>$5</button>
      </div>
      <div>
        <button onClick={() => handleClick(25.00)} className='uk-button uk-width-expand uk-border-rounded uk-button-default'>$25</button>
      </div>
      <div>
        <button onClick={() => handleClick(50.00)} className='uk-button uk-width-expand uk-border-rounded uk-button-default'>$50</button>
      </div>
      <div>
        <button onClick={() => handleClick(100.00)} className='uk-button uk-width-expand uk-border-rounded uk-button-default'>$100</button>
      </div>
      <div>
        <button onClick={() => handleClick(250.00)} className='uk-button uk-width-expand uk-border-rounded uk-button-default'>$250</button>
      </div>
      <div>
        <button className='uk-button uk-width-expand uk-border-rounded uk-button-secondary'>SIT</button>
      </div>
    </div>
  )
}
