import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { leaveGame } from '../slices/game.slice'

export default function LeaveTable () {
  const dispatch = useDispatch<AppDispatch>()
  const game = useSelector((state: RootState) => state.game)

  const handleClick = () => {
    dispatch(leaveGame(game.session))
  }

  return (game && <button onClick={handleClick} className='uk-icon-button' data-uk-icon='sign-out' />)
}
