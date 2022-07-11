import React from 'react'
import {
  default as C,
  KIND_ACE,
  KIND_KING,
  KIND_QUEEN,
  KIND_JACK,
  KIND_TEN,
  KIND_NINE,
  KIND_EIGHT,
  KIND_SEVEN,
  KIND_SIX,
  KIND_FIVE,
  KIND_FOUR,
  KIND_THREE,
  KIND_TWO,
  SUIT_CLUBS,
  SUIT_DIAMOND,
  SUIT_HEART,
  SUIT_SPADE
} from '../../internal/table/card'

function renderSwitch (card: C): string {
  switch (`${card.Kind}${card.Suit}`) {
    case `${KIND_ACE}${SUIT_DIAMOND}`:
      return '🂡'
    case `${KIND_KING}${SUIT_DIAMOND}`:
      return '🃎'
    case `${KIND_QUEEN}${SUIT_DIAMOND}`:
      return '🃍'
    case `${KIND_JACK}${SUIT_DIAMOND}`:
      return '🃋'
    case `${KIND_TEN}${SUIT_DIAMOND}`:
      return '🃊'
    case `${KIND_NINE}${SUIT_DIAMOND}`:
      return '🃉'
    case `${KIND_EIGHT}${SUIT_DIAMOND}`:
      return '🃈'
    case `${KIND_SEVEN}${SUIT_DIAMOND}`:
      return '🃇'
    case `${KIND_SIX}${SUIT_DIAMOND}`:
      return '🃆'
    case `${KIND_FIVE}${SUIT_DIAMOND}`:
      return '🃅'
    case `${KIND_FOUR}${SUIT_DIAMOND}`:
      return '🃄'
    case `${KIND_THREE}${SUIT_DIAMOND}`:
      return '🃃'
    case `${KIND_TWO}${SUIT_DIAMOND}`:
      return '🃂'
    case `${KIND_ACE}${SUIT_CLUBS}`:
      return '🃑'
    case `${KIND_KING}${SUIT_CLUBS}`:
      return '🃞'
    case `${KIND_QUEEN}${SUIT_CLUBS}`:
      return '🃝'
    case `${KIND_JACK}${SUIT_CLUBS}`:
      return '🃛'
    case `${KIND_TEN}${SUIT_CLUBS}`:
      return '🃚'
    case `${KIND_NINE}${SUIT_CLUBS}`:
      return '🃙'
    case `${KIND_EIGHT}${SUIT_CLUBS}`:
      return '🃘'
    case `${KIND_SEVEN}${SUIT_CLUBS}`:
      return '🃗'
    case `${KIND_SIX}${SUIT_CLUBS}`:
      return '🃖'
    case `${KIND_FIVE}${SUIT_CLUBS}`:
      return '🃕'
    case `${KIND_FOUR}${SUIT_CLUBS}`:
      return '🃔'
    case `${KIND_THREE}${SUIT_CLUBS}`:
      return '🃓'
    case `${KIND_TWO}${SUIT_CLUBS}`:
      return '🃒'
    case `${KIND_ACE}${SUIT_HEART}`:
      return '🂱'
    case `${KIND_KING}${SUIT_HEART}`:
      return '🂾'
    case `${KIND_QUEEN}${SUIT_HEART}`:
      return '🂽'
    case `${KIND_JACK}${SUIT_HEART}`:
      return '🂻'
    case `${KIND_TEN}${SUIT_HEART}`:
      return '🂺'
    case `${KIND_NINE}${SUIT_HEART}`:
      return '🂹'
    case `${KIND_EIGHT}${SUIT_HEART}`:
      return '🂸'
    case `${KIND_SEVEN}${SUIT_HEART}`:
      return '🂷'
    case `${KIND_SIX}${SUIT_HEART}`:
      return '🂶'
    case `${KIND_FIVE}${SUIT_HEART}`:
      return '🂵'
    case `${KIND_FOUR}${SUIT_HEART}`:
      return '🂴'
    case `${KIND_THREE}${SUIT_HEART}`:
      return '🂳'
    case `${KIND_TWO}${SUIT_HEART}`:
      return '🂲'
    case `${KIND_ACE}${SUIT_SPADE}`:
      return '🂡'
    case `${KIND_KING}${SUIT_SPADE}`:
      return '🂮'
    case `${KIND_QUEEN}${SUIT_SPADE}`:
      return '🂭'
    case `${KIND_JACK}${SUIT_SPADE}`:
      return '🂫'
    case `${KIND_TEN}${SUIT_SPADE}`:
      return '🂪'
    case `${KIND_NINE}${SUIT_SPADE}`:
      return '🂩'
    case `${KIND_EIGHT}${SUIT_SPADE}`:
      return '🂨'
    case `${KIND_SEVEN}${SUIT_SPADE}`:
      return '🂧'
    case `${KIND_SIX}${SUIT_SPADE}`:
      return '🂦'
    case `${KIND_FIVE}${SUIT_SPADE}`:
      return '🂥'
    case `${KIND_FOUR}${SUIT_SPADE}`:
      return '🂤'
    case `${KIND_THREE}${SUIT_SPADE}`:
      return '🂣'
    case `${KIND_TWO}${SUIT_SPADE}`:
      return '🂢'
    default:
      return '🂠'
  }
}

export default function Card (props: { card: C }) {
  return (
    <span className='uk-text-center' style={{ fontSize: 'inherit' }}>{renderSwitch(props.card)}</span>
  )
}
