import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import CurrentBalance from './current-balance'
import Hand from './hand'
import Hit from './hit'
import LeaveTable from './leave-table'
import PreviousBet from './previous-bet'
import Stand from './stand'
import { useNavigate } from 'react-router-dom'
import PlaceBet from './place-bet'
import { State } from '../../internal/table'

export default function Table() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const player = useSelector((state: RootState) => state.player)
  const session = useSelector((state: RootState) => state.session)
  const table = useSelector((state: RootState) => state.table)

  useEffect(() => {
    if (!session || !table || !player) {
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
                <div className='uk-float-left'>
                  <button className='uk-icon-button' data-uk-icon='menu' />
                </div>
                <div className='uk-float-right'>
                  <LeaveTable />
                </div>
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
                {player && <Hand key={player?.Hands[0]?.Id} hand={player?.Hands[0]!} isDealer={false} />}
              </div>
              <div className='uk-margin-large'>
                <div data-uk-grid>
                  <div className='uk-width-1-3 uk-width-1-2@s uk-width-2-3@m'>
                    <CurrentBalance />
                    <PreviousBet />
                  </div>
                  <div className='uk-width-2-3 uk-width-1-2@s uk-width-1-3@m'>
                    {
                      {
                        'placing_bets': <PlaceBet />,
                        'dealing_to_players': <h1>Dealing to Players</h1>,
                        'buying_insurance': <h1>Buying Insurance</h1>,
                        'paying_naturals': <h1>Paying Naturals</h1>,
                        'dealing_to_dealer': <h1>Dealing to Dealer</h1>,
                        'settling_bets': <h1>Settling Bets</h1>,
                      }[table?.State!]
                    }
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
