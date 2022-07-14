import React from 'react'
import { default as H } from '../../internal/hand'
import Card from './card'

export default function Hand(props: { hand: H, isDealer: boolean }) {
  return (
    <div>
      <div className='uk-flex uk-flex-center' style={{ fontSize: props.isDealer ? '96px' : '128px' }}>
        {props.hand.Cards.map((card) => <Card key={card.Id} card={card} />)}
      </div>
      <div>
        {/* {!props.isDealer && <h3>{props.hand.Score()}</h3>} */}
      </div>
    </div>
  )
}
