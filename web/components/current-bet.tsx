import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function CurrentBet () {
  const player = useSelector((state: RootState) => state.player)

  return (
    <div className='uk-margin'>
      <h1>${player?.CurrentBet}</h1>
    </div>
  )
}
