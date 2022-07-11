import React from 'react'
import { default as H } from '../../internal/hand/hand'
import Card from './card'

export default function Hand (props: { hand: H, isDealer: boolean }) {
  console.log(props.hand)

  return (
    <div>
      <div className='uk-flex uk-flex-center' style={{ fontSize: props.isDealer ? '96px' : '128px' }}>
        {props.hand.Cards.map(card => <Card key={card.Id} card={card} />)}
      </div>
      <div>
        {!props.isDealer && <h3 className='uk-text-muted uk-text-center'>{props.hand.Score()}</h3>}
      </div>
    </div>
  )
}
