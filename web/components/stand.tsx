import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import Session from '../../internal/session'
import { stand } from '../player.slice'

export default function Stand (props: { handId: string }) {
  const dispatch = useDispatch<AppDispatch>()
  const session = useSelector<RootState, Session | null>(state => state.session)

  const handleClick = () => {
    if (session != null) {
      dispatch(stand({
        Parameters: {
          HandId: props.handId,
          SessionId: session.Id
        }
      }))
    }
  }

  return (
    <div className='uk-margin'>
      <button onClick={handleClick} className='uk-button uk-border-rounded uk-width-expand uk-button-default'>STAND</button>
    </div>
  )
}
