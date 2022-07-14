import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { getCurrentPlayer } from '../player.slice'

export default function CurrentBalance() {
  const dispatch = useDispatch<AppDispatch>()
  const player = useSelector((state: RootState) => state.player)
  const session = useSelector((state: RootState) => state.session)

  useEffect(() => {
    // if (!player && session && session.PlayerId && session.TableId) {
    //   dispatch(getPlayer({
    //     Parameters: {
    //       PlayerId: session.PlayerId,
    //     }
    //   }))
    // }
  })

  return (
    <div className='uk-margin'>
      {player && <h1>{player.Balance}</h1>}
    </div>
  )
}
