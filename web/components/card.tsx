import React from 'react'

import { default as C } from '../../internal/card/card'

export default function Card(props: { card: { Kind: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; Suit: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined } }) {
  return (
    <div className='uk-card uk-card-default uk-card-body uk-height-medium'>
      <h3 className='uk-card-title uk-heading-xlarge'>{props.card.Kind}</h3>
      <h3 className='uk-card-title'>{props.card.Suit}</h3>
    </div>
  )
}
