import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { leaveTable } from '../player.slice'

export default function LeaveTable () {
  const dispatch = useDispatch<AppDispatch>()
  const session = useSelector((state: RootState) => state.session)

  const handleClick = () => {
    if (session != null) {
      dispatch(leaveTable({
        Parameters: {
          SessionId: session.Id
        }
      }))
    }
  }

  return (session && <button onClick={handleClick} className='uk-icon-button' data-uk-icon='sign-out' />)
}
