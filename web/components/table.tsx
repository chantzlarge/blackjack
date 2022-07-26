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
import Player from '../../internal/player/player'
import Hand from '../../internal/hand/hand'

export default function Table() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const game = useSelector((state: RootState) => state.game)

  useEffect(() => {
    if (!game) {
      navigate('/')
    }
  })

  return (
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
        <h3 className='uk-heading-small uk-text-muted uk-text-center'>BLACKJACK</h3>
      </div>

      {/* right */}
      <div className='uk-position-right'>
        {/* TODO */}
      </div>

      {/* bottom */}
      <div className='uk-position-bottom'>
        <div className='uk-section uk-section-medium'>
          <div className='uk-container uk-container-small'>
            <div />
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
                  {game && game.table.isAcceptingBets && <Bet />}
                  {game && game.table.isDealingToPlayers && <h1>Dealing to players</h1>}
                  {/* {
                    {
                      placing_bets: ,
                      dealing_to_players: <h1>Dealing to Players</h1>,
                      buying_insurance: <h1>Buying Insurance</h1>,
                      paying_naturals: <h1>Paying Naturals</h1>,
                      dealing_to_dealer: <h1>Dealing to Dealer</h1>,
                      player_turn: <div>
                        <div className='uk-margin'>
                          {(player != null) && player.Hands[0] && <Hit handId={player.Hands[0].Id} />}
                        </div>
                        <div className='uk-margin'>
                          {(player != null) && player.Hands[0] && <Stand handId={player.Hands[0].Id} />}
                        </div>
                      </div>,
                      dealer_turn: <h1>Dealer Turn</h1>,
                      settling_bets: <h1>Settling Bets</h1>
                    }[table?.State!]
                  } */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
