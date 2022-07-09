import React from 'react'
import { default as H } from '../../internal/card/hand'
import Card from './card'

export default function Hand(props: { hand: H }) {
  console.log(props.hand)
  return (
    <div>
      <div className='uk-flex uk-flex-center'>
        {props.hand.Cards.map(card => <Card key={card.Id} card={card} />)}
      </div>
    </div>
  )
}
