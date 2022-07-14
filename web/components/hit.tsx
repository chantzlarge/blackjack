import React from 'react'
import { useSelector } from 'react-redux'
import TableClient from '../api'
import { RootState } from '../store'
import { default as S } from '../../internal/session/session'

export default function Hit () {
  const session = useSelector<RootState, S | null>((state) => {
    return state.session
  })

  return (
    <div className='uk-margin'>
      <button className='uk-button uk-border-rounded uk-width-expand uk-button-primary'>HIT</button>
    </div>
  )
}
