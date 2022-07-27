import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function CurrentBet () {
  const game = useSelector((state: RootState) => state.game)

  return (
    <div className='uk-margin'>
      <h1>${game?.player?.bet}</h1>
    </div>
  )
}
