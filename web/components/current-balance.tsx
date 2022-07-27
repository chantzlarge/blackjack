import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function CurrentBalance () {
  const game = useSelector((state: RootState) => state.game)

  return (
    <div className='uk-margin'>
      <h3 className='uk-text-muted'>${game?.player?.balance}</h3>
    </div>
  )
}
