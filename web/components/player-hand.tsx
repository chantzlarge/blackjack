import Card from 'card'
import React from 'react'
import Hand from '../../internal/hand'
import PlayingCard from './playing-card'

export default function PlayerHand (props: { hand: Hand }) {
  console.log(props.hand)
  return (
    <div>
      <div className='uk-flex uk-flex-center' style={{ fontSize: '128px' }}>
        {props.hand.Cards.map((c) => <PlayingCard key={c.Id} card={c} />)}
      </div>
      <div>
        {/* <h3>{props.hand.Score()}</h3> */}
      </div>
    </div>
  )
}
