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

  return (<>
    <div className='uk-section-xsmall'>
      <div className='uk-container'>
        <span className='uk-float-left' data-uk-icon="sign-out"></span>
        <span className='uk-float-right' data-uk-icon="push"></span>
      </div>
    </div>
    <div className='uk-section'>
      <div className='uk-container'>
        <div className='uk-inline uk-width-expand' data-uk-height-viewport="offset-bottom: 50;">

          {/* top */}
          <div className='uk-position-top'>
            <div>
              <Hand hand={h} isDealer={true} />
            </div>
          </div>

          {/* left */}
          <div className='uk-position-left'>
            <h3>left</h3>
          </div>

          {/* center */}
          <div className='uk-position-center'>
            <h3 className='uk-text-muted'>BLACKJACK</h3>
          </div>

          {/* right */}
          <div className='uk-position-right'>
            <h3>right</h3>
          </div>

          {/* bottom */}
          <div className='uk-position-bottom'>
            <div>
              <Hand hand={h} isDealer={false} />
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className='uk-section uk-section-small'>
      <div className='uk-container'>
        <div className='uk-grid uk-child-width-1-2' data-uk-grid>
          <div>
            <h3 className='uk-heading-small'>$5,000</h3>
            <h5 className='uk-text-muted'>$15</h5>
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
