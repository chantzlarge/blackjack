import React from 'react'
import { useSelector } from 'react-redux'
import Card from './card'
import { default as T } from '../../internal/table/table'
import { RootState } from '../store'

export default function Table() {
  const table = useSelector<RootState, T | null>((state: { table: any }) => {
    return state.table
  })

  return (
    <>
      {/* dealer side */}
      <div className='uk-section'>
        <div className='uk-container'>
          <div className='uk-grid uk-child-width-1-2' data-uk-grid>

            {table?.Deck.map(card => <Card key={card.Id} card={card} />)}

          </div>
        </div>
      </div>
    </>
  )
}
