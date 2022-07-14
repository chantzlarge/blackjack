import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function CurrentBalance() {
  const player = useSelector((state: RootState) => state.player)

  return (
    <div className='uk-margin'>
      {player && <h1>{player.Balance}</h1>}
    </div>
  )
}
