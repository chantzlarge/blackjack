import React from 'react'
import { useSelector } from 'react-redux'
import Card from './card'
import { default as T } from '../../internal/table/table'
import { RootState } from '../store'
import Hand from './hand'
import { default as C } from '../../internal/card/card'
import { default as H } from '../../internal/card/hand'

export default function Table() {
  const h = new H()

  h.Deal(new C('spade', 'ace'))
  h.Deal(new C('diamond', 'two'))

  const table = useSelector<RootState, T | null>((state: { table: any }) => {
    return state.table
  })

  return (
        <div className='uk-section' >
    <div className='uk-container'>
        <div className='uk-inline' data-uk-height-viewport>

          <div className='uk-position-top'>
            <Hand hand={h} />
          </div>

          <div className='uk-position-bottom'>
            <Hand hand={h} />
          </div>

        </div>
      </div>
    </div>
  )
}
