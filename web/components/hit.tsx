import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function Hit () {
  const session = useSelector((state: RootState) => state.session)

  return (
    <div className='uk-margin'>
      <button className='uk-button uk-border-rounded uk-width-expand uk-button-primary'>HIT</button>
    </div>
  )
}
