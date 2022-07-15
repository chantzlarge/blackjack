import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { hit } from '../player.slice'

export default function Hit (props: { handId: string }) {
  const dispatch = useDispatch<AppDispatch>()
  const session = useSelector((state: RootState) => state.session)

  const handleClick = () => {
    if (session != null) {
      dispatch(hit({
        Parameters: {
          HandId: props.handId,
          SessionId: session?.Id
        }
      }))
    }
  }

  return (
    <div className='uk-margin'>
      <button onClick={handleClick} className='uk-button uk-border-rounded uk-width-expand uk-button-primary'>HIT</button>
    </div>
  )
}
