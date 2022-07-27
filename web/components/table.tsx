import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import CurrentBalance from './current-balance'
import PlayerHand from './player-hand'
import LeaveTable from './leave-table'
import { useNavigate } from 'react-router-dom'
import PlaceBet from './place-bet'
import DealerHand from './dealer-hand'
import CurrentBet from './current-bet'
import Hit from './hit'
import Stand from './stand'
import Bet from './bet'
import Player from '../../lib/player/player'
import Hand from '../../lib/hand/hand'
import { State } from '../../lib/table/table'
import BuyOrSkipInsurance from './buy-or-skip-insurance'

function renderSwitch (state: State) {
  switch (state) {
    case State.ACCEPTING_BETS:
      return <Bet />
    case State.DEALING_TO_PLAYERS:
      return <h1>DEALING_TO_PLAYERS</h1>
    case State.DEALING_TO_DEALER:
      return <h1>DEALING_TO_DEALER</h1>
    case State.ACCEPTING_INSURANCE:
      return <BuyOrSkipInsurance />
    case State.PAYING_INSURANCE:
      return <h1>PAYING_INSURANCE</h1>
    case State.PAYING_NATURALS:
      return <h1>PAYING_NATUALS</h1>
    case State.PLAYER_TURNS:
      return (
        <div>
          <div className='uk-margin'>
            <Hit />
          </div>
          <div className='uk-margin'>
            <Stand />
          </div>
        </div>
      )
    case State.DEALER_TURN:
      return <h1>DEALER_TURN</h1>
    case State.PAYING_BETS:
      return <h1>PAYING_BETS</h1>
  }
}

export default function Table () {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const game = useSelector((state: RootState) => state.game)

  useEffect(() => {
    if (!game) {
      navigate('/')
    }
  })

  return (
    <div className='uk-width-expand uk-inline' data-uk-height-viewport='offset-bottom: 5'>

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
              {game && <DealerHand key={game.table.dealer.hand.id} hand={game.table.dealer.hand} />}
            </div>
          </div>
        </div>
      </div>

      {/* left */}
      <div className='uk-position-left'>
        {/* TODO */}
      </div>

      {/* center */}
      <div className='uk-position-center'>
        <h3 className='uk-text-muted uk-text-center'>BLACKJACK</h3>
      </div>

      {/* right */}
      <div className='uk-position-right'>
        {/* TODO */}
      </div>

      {/* bottom */}
      <div className='uk-position-bottom'>
        <div className='uk-section uk-section-medium'>
          <div className='uk-container uk-container-small'>
            <div className='uk-margin'>
              {game && game.table.players.find((p: Player) => p.id === game.session.playerId)?.hands.map((h: Hand) => <PlayerHand key={h.id} hand={h} />)}
            </div>
            <div className='uk-margin-large'>
              <div data-uk-grid>
                <div className='uk-width-1-3 uk-width-1-2@s uk-width-2-3@m'>
                  <CurrentBet />
                  <CurrentBalance />
                </div>
                <div className='uk-width-2-3 uk-width-1-2@s uk-width-1-3@m'>
                  {game && renderSwitch(game.table.state)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
