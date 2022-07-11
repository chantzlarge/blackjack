import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { placeBet } from '../player.slice'

export default function PlaceBet () {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className='uk-grid-small uk-child-width-1-2' data-uk-grid>
      <div>
        <button onClick={() => dispatch(placeBet())} className='uk-button uk-width-expand uk-border-rounded uk-button-default'>$5</button>
      </div>
      <div>
        <button onClick={() => dispatch(placeBet())} className='uk-button uk-width-expand uk-border-rounded uk-button-default'>$25</button>
      </div>
      <div>
        <button onClick={() => dispatch(placeBet())} className='uk-button uk-width-expand uk-border-rounded uk-button-default'>$50</button>
      </div>
      <div>
        <button onClick={() => dispatch(placeBet())} className='uk-button uk-width-expand uk-border-rounded uk-button-default'>$100</button>
      </div>
      <div>
        <button onClick={() => dispatch(placeBet())} className='uk-button uk-width-expand uk-border-rounded uk-button-default'>$250</button>
      </div>
      <div>
        <button onClick={() => dispatch(placeBet())} className='uk-button uk-width-expand uk-border-rounded uk-button-secondary'>SIT</button>
      </div>
    </div>
  )
}
