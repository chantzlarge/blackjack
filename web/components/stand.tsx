import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import Session from '../../internal/session'

export default function Stand () {
  const session = useSelector<RootState, Session | null>(state => {
    return state.session
  })

  return (
    <div className='uk-margin'>
      <button className='uk-button uk-border-rounded uk-width-expand uk-button-default'>STAND</button>
    </div>
  )
}
