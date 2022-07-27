import React from 'react'
import Hand from '../../lib/hand/hand'
import Card from './playing-card'

export default function OtherPlayerHand (props: { hand: Hand }) {
  return (
    <div>
      <div className='uk-flex uk-flex-center' style={{ fontSize: '128px' }}>
        {/* {props.hand.Cards.map((c) => <Card key={c.Id} card={c} />)} */}
      </div>
    </div>
  )
}
