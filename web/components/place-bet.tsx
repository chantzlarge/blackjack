import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'

export default function PlaceBet () {

  return (
    <div className='uk-grid-small uk-child-width-1-2' data-uk-grid>
      <div>
        <button className='uk-button uk-width-expand uk-border-rounded uk-button-default'>$5</button>
      </div>
      <div>
        <button className='uk-button uk-width-expand uk-border-rounded uk-button-default'>$25</button>
      </div>
      <div>
        <button className='uk-button uk-width-expand uk-border-rounded uk-button-default'>$50</button>
      </div>
      <div>
        <button className='uk-button uk-width-expand uk-border-rounded uk-button-default'>$100</button>
      </div>
      <div>
        <button className='uk-button uk-width-expand uk-border-rounded uk-button-default'>$250</button>
      </div>
      <div>
        <button className='uk-button uk-width-expand uk-border-rounded uk-button-secondary'>SIT</button>
      </div>
    </div>
  )
}
