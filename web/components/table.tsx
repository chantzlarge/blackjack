import React from 'react'
import { useSelector } from 'react-redux'
import { default as T } from '../../internal/table/table'
import { RootState } from '../store'
import Hand from './hand'
import { default as C } from '../../internal/table/card'
import { default as H } from '../../internal/table/hand'
import { default as P } from '../../internal/table/player'
import Balance from './balance'
import PreviousBet from './previous-bet'
import PlaceBet from './place-bet'
import Hit from './hit'

export default function Table () {
  const h = new H()
  const p = new P()

  p.DealCard(new C('spade', 'ace'))
  // p.DealCard(new C('clubs', 'three'))
  p.DealCard(new C('clubs', 'four'))
  // p.DealCard(new C('diamond', 'five'))
  p.DealCard(new C('diamond', 'two'))
  // p.DealCard(new C('diamond', 'ace'))
  p.DealCard(new C('diamond', 'eight'))

  h.Deal(new C('spade', 'ace'))
  h.Deal(new C('diamond', 'two'))
  h.Sort()

  const table = useSelector<RootState, T | null>((state: { table: any }) => {
    return state.table
  })

  return (
    <>
      <div className='uk-width-expand uk-inline' data-uk-height-viewport>

        {/* top */}
        <div className='uk-position-top'>
          <div className='uk-section uk-section-small'>
            <div className='uk-container'>
              <div>
                <button className='uk-button-icon uk-float-left' data-uk-icon='menu' />
                <button className='uk-button-icon uk-float-right' data-uk-icon='sign-out' />
              </div>
              <div>
                <Hand hand={h} isDealer />
              </div>
            </div>
          </div>
        </div>

        {/* left */}
        <div className='uk-position-left'>
          {/* TODO */}
        </div>

        {/* center */}
        <div className='uk-position-center' />

        {/* right */}
        <div className='uk-position-right'>
          {/* TODO */}
        </div>

        {/* bottom */}
        <div className='uk-position-bottom'>
          <div className='uk-section uk-section-medium'>
            <div className='uk-container uk-container-small'>
              <div>
                <h3 className='uk-heading-small uk-text-muted uk-text-center'>BLACKJACK</h3>
              </div>
              <div className='uk-margin'>
                {p.Hands.map(h => <Hand key={h.Id} hand={h} isDealer={false} />)}
              </div>
              <div className='uk-margin-large'>
                <div data-uk-grid>
                  <div className='uk-width-1-3 uk-width-2-3@s'>
                    <Balance />
                    <PreviousBet />
                  </div>
                  <div className='uk-width-2-3 uk-width-1-3@s'>
                    <Hit />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
