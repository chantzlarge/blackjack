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
    <div className='uk-section' >
      <div className='uk-container'>
        <div className='uk-inline uk-width-expand' data-uk-height-viewport="offset-bottom:20;">

          <div className='uk-position-top'>
            <div>
              <Hand hand={h} />
            </div>
          </div>

          <div className='uk-position-bottom'>
            <div>
              <Hand hand={h} />
            </div>
            <div>
              <div className='uk-grid uk-child-width-1-2' data-uk-grid>
                  <div>
                    left
                  </div>
                  <div>
                    right
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
