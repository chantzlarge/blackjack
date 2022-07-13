import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import TableClient from '../api'
import Session from '../../internal/session/session'

export default function Stand() {
  const session = useSelector<RootState, Session | null>(state => {
    return state.session
  })

  const tableClient = new TableClient()

  return (
    <div className='uk-margin'>
      <button className='uk-button uk-border-rounded uk-width-expand uk-button-default'>STAND</button>
    </div>
  )
}
