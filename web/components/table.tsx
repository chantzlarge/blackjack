import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import CurrentBalance from './current-balance'
import Hand from './hand'
import Hit from './hit'
// import PlaceBet from './place-bet'
import PreviousBet from './previous-bet'
import Stand from './stand'
// import { default as C, Kind, Suit } from '../../internal/table/card'
// import { default as H } from '../../internal/table/hand'
// import { default as P } from '../../internal/table/player'
import { default as S } from '../../internal/session/session'
import { default as T } from '../../internal/table/table'
import { getTable } from '../table.slice'
import { getSession } from '../session.slice'
import { SessionContext } from '../session.context'

export default function Table() {
  // const api = new API()

  const dispatch = useDispatch<AppDispatch>()
  const session = useSelector((state: RootState) => state.session)
  const table = useSelector((state: RootState) => state.table)

  useEffect(() => {
    console.log(`table: ${JSON.stringify(table)}`)

    if (session && !table) {
      dispatch(getTable({
        input: {
          Parameters: {
            TableId: session.TableId!
          }
        },
        session: session!
      }))
    }
  })

  return (
    <>
      <div className='uk-width-expand uk-inline' data-uk-height-viewport>

        {/* top */}
        <div className='uk-position-top'>
          <div className='uk-section uk-section-small'>
            <div className='uk-container'>
              <div>
                <button className='uk-icon-button uk-float-left' data-uk-icon='menu' />
                <button className='uk-icon-button uk-float-right' data-uk-icon='sign-out' />
              </div>
              <div>
                {session && table && <Hand hand={table.Dealer.Hand} isDealer />}
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
                {session && table && table.Players.map(p => p.Hands.map(h => <Hand key={h.Id} hand={h} isDealer={false} />)) }
              </div>
              <div className='uk-margin-large'>
                <div data-uk-grid>
                  <div className='uk-width-1-3 uk-width-2-3@s'>
                    <CurrentBalance />
                    <PreviousBet />
                  </div>
                  <div className='uk-width-2-3 uk-width-1-3@s'>
                    <Hit />
                    <Stand />
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
