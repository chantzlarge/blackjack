import React from 'react'
import { useSelector } from 'react-redux'
import { default as T } from '../../internal/table/table'
import { RootState } from '../store'
import Hand from './hand'
import { default as C } from '../../internal/card/card'
import { default as H } from '../../internal/card/hand'
import { default as P } from '../../internal/player/player'
import Balance from './balance'
import PreviousBet from './previous-bet'

export default function Table () {
  const h = new H()
  const p = new P()

  p.DealCard(new C('spade', 'ace'))
  // p.DealCard(new C('clubs', 'three'))
  p.DealCard(new C('clubs', 'four'))
  // p.DealCard(new C('diamond', 'five'))
  // p.DealCard(new C('diamond', 'two'))
  // p.DealCard(new C('diamond', 'ace'))
  p.DealCard(new C('diamond', 'eight'))
  p.DealCard(new C('diamond', 'ten'))

  h.Deal(new C('spade', 'ace'))
  h.Deal(new C('diamond', 'two'))
  h.Sort()

  const table = useSelector<RootState, T | null>((state: { table: any }) => {
    return state.table
  })

  return (
    <>
      <div className='uk-section-xsmall'>
        <div className='uk-container'>
          <span className='uk-float-left' data-uk-icon='sign-out' />
          <span className='uk-float-right' data-uk-icon='push' />
        </div>
      </div>
      <div className='uk-section'>
        <div className='uk-container'>
          <div className='uk-inline uk-width-expand' data-uk-height-viewport='offset-bottom: 50;'>

            {/* top */}
            <div className='uk-position-top'>
              <div>
                <Hand hand={h} isDealer />
              </div>
            </div>

            {/* left */}
            <div className='uk-position-left'>
              {/* TODO */}
            </div>

            {/* center */}
            <div className='uk-position-center'>
              <h3 className='uk-text-muted'>BLACKJACK</h3>
            </div>

            {/* right */}
            <div className='uk-position-right'>
              {/* TODO */}
            </div>

            {/* bottom */}
            <div className='uk-position-bottom'>
              {p.Hands.map(h => <Hand key={h.Id} hand={h} isDealer={false} />)}
            </div>

          </div>
        </div>
      </div>

      <div className='uk-section uk-section-xsmall'>
        <div className='uk-container uk-container-small'>
          <div className='uk-grid uk-child-width-1-2' data-uk-grid>
            <div>
              <Balance />
              <PreviousBet />
            </div>
            <div>
              ACTIONS
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
