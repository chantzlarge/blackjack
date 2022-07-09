import React from 'react'
import { default as H } from '../../internal/card/hand'
import Card from './card'

export default function Hand(props: { hand: H, isDealer: boolean }) {
  console.log(props.hand)

  return (
    <div>
      <div className='uk-flex uk-flex-center' style={{fontSize: props.isDealer ? '88px' : '132px'}}>
        {props.hand.Cards.map(card => <Card key={card.Id} card={card} />)}
      </div>
    </div>
  )
}
