import React from 'react'
import Hit from './hit'
import Stand from './stand'

export default function HitOrStand () {
  return (
    <div className='uk-grid-small uk-child-width-1-1' data-uk-grid>
      <div>
        <Hit />
      </div>
      <div>
        <Stand />
      </div>
    </div>
  )
}
