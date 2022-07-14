import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import CurrentBalance from './current-balance'
import Hand from './hand'
import Hit from './hit'
import PreviousBet from './previous-bet'
import Stand from './stand'
import { getCurrentTable } from '../table.slice'
import { useNavigate } from 'react-router-dom'
import { getCurrentPlayer } from '../player.slice'

export default function Table() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const player = useSelector((state: RootState) => state.player)
  const session = useSelector((state: RootState) => state.session)
  const table = useSelector((state: RootState) => state.table)

  useEffect(() => {
    if (!session && !player && !table) {
      navigate('/')
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
                {table && <Hand key={table?.Dealer.Hand.Id} hand={table?.Dealer.Hand!} isDealer />}
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
                {/* {player && <Hand key={player?.Hands[0]?.Id} hand={player?.Hands[0]!} isDealer={false} />} */}
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
