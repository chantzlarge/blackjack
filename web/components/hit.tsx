import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { hit } from '../player.slice'

export default function Hit () {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <button onClick={() => dispatch(hit())} className='uk-button uk-border-rounded uk-width-expand uk-button-primary'>HIT</button>
  )
}
