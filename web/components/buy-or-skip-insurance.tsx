import React from 'react'
import BuyInsurance from './buy-insurance'
import DeclineInsurance from './decline-insurance'

export default function BuyOrSkipInsurance () {
  return (
  <div>
    <div className='uk-margin'>
      <BuyInsurance />
    </div>
    <div className='uk-margin'>
      <DeclineInsurance />
    </div>
  </div>
  )
}
