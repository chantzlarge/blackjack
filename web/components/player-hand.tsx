// import Card from 'card/card'
import React from 'react'
import Hand from '../../internal/hand/hand'
import PlayingCard from './playing-card'

export default function PlayerHand (props: { hand: Hand }) {
  console.log(props.hand)
  return (
    <div>
      <div className='uk-flex uk-flex-center' style={{ fontSize: '128px' }}>
        {props.hand.cards.map((c) => <PlayingCard key={c.id} card={c} />)}
      </div>
      <div>
        {/* <h3>{props.hand.Score()}</h3> */}
      </div>
    </div>
  )
}
