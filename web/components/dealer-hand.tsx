import React from 'react'
import Hand from '../../internal/hand/hand'
import Card from './playing-card'

export default function DealerHand (props: { hand: Hand }) {
  return (
    <div>
      <div className='uk-flex uk-flex-center' style={{ fontSize: '88px' }}>
        {props.hand.cards.map((c) => <Card key={c.id} card={c} />)}
      </div>
    </div>
  )
}
