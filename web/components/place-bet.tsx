import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { bet } from '../player.slice'

export default function PlaceBet() {
  const dispatch = useDispatch<AppDispatch>()
  const session = useSelector((state: RootState) => state.session)

  const handleClick = (amount: number) => {
    if (session) {
      dispatch(bet({
        Parameters: {
          Amount: amount,
          SessionId: session.Id
        }
      }))
    }
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
