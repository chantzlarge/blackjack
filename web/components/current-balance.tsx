import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function CurrentBalance () {
  const player = useSelector((state: RootState) => state.player)

  return (
    <div className='uk-margin'>
      <h3 className='uk-text-muted'>${player?.Balance}</h3>
    </div>
  )
}
