import React from 'react'
import {
  default as C,
  VALUE_ACE,
  VALUE_KING,
  VALUE_QUEEN,
  VALUE_JACK,
  VALUE_TEN,
  VALUE_NINE,
  VALUE_EIGHT,
  VALUE_SEVEN,
  VALUE_SIX,
  VALUE_FIVE,
  VALUE_FOUR,
  VALUE_THREE,
  VALUE_TWO,
  SUIT_CLUBS,
  SUIT_DIAMOND,
  SUIT_HEART,
  SUIT_SPADE,
} from '../../internal/card/card'

function renderSwitch(card: C): string {
  switch (`${card.Value}${card.Suit}`) {
    case `${VALUE_ACE}${SUIT_DIAMOND}`:
      return '🂡'
    case `${VALUE_KING}${SUIT_DIAMOND}`:
      return '🃎'
    case `${VALUE_QUEEN}${SUIT_DIAMOND}`:
      return '🃍'
    case `${VALUE_JACK}${SUIT_DIAMOND}`:
      return '🃋'
    case `${VALUE_TEN}${SUIT_DIAMOND}`:
      return '🃊'
    case `${VALUE_NINE}${SUIT_DIAMOND}`:
      return '🃉'
    case `${VALUE_EIGHT}${SUIT_DIAMOND}`:
      return '🃈'
    case `${VALUE_SEVEN}${SUIT_DIAMOND}`:
      return '🃇'
    case `${VALUE_SIX}${SUIT_DIAMOND}`:
      return '🃆'
    case `${VALUE_FIVE}${SUIT_DIAMOND}`:
      return '🃅'
    case `${VALUE_FOUR}${SUIT_DIAMOND}`:
      return '🃄'
    case `${VALUE_THREE}${SUIT_DIAMOND}`:
      return '🃃'
    case `${VALUE_TWO}${SUIT_DIAMOND}`:
      return '🃂'
    case `${VALUE_ACE}${SUIT_CLUBS}`:
      return '🃑'
    case `${VALUE_KING}${SUIT_CLUBS}`:
      return '🃞'
    case `${VALUE_QUEEN}${SUIT_CLUBS}`:
      return '🃝'
    case `${VALUE_JACK}${SUIT_CLUBS}`:
      return '🃛'
    case `${VALUE_TEN}${SUIT_CLUBS}`:
      return '🃚'
    case `${VALUE_NINE}${SUIT_CLUBS}`:
      return '🃙'
    case `${VALUE_EIGHT}${SUIT_CLUBS}`:
      return '🃘'
    case `${VALUE_SEVEN}${SUIT_CLUBS}`:
      return '🃗'
    case `${VALUE_SIX}${SUIT_CLUBS}`:
      return '🃖'
    case `${VALUE_FIVE}${SUIT_CLUBS}`:
      return '🃕'
    case `${VALUE_FOUR}${SUIT_CLUBS}`:
      return '🃔'
    case `${VALUE_THREE}${SUIT_CLUBS}`:
      return '🃓'
    case `${VALUE_TWO}${SUIT_CLUBS}`:
      return '🃒'
    case `${VALUE_ACE}${SUIT_HEART}`:
      return '🂱'
    case `${VALUE_KING}${SUIT_HEART}`:
      return '🂾'
    case `${VALUE_QUEEN}${SUIT_HEART}`:
      return '🂽'
    case `${VALUE_JACK}${SUIT_HEART}`:
      return '🂻'
    case `${VALUE_TEN}${SUIT_HEART}`:
      return '🂺'
    case `${VALUE_NINE}${SUIT_HEART}`:
      return '🂹'
    case `${VALUE_EIGHT}${SUIT_HEART}`:
      return '🂸'
    case `${VALUE_SEVEN}${SUIT_HEART}`:
      return '🂷'
    case `${VALUE_SIX}${SUIT_HEART}`:
      return '🂶'
    case `${VALUE_FIVE}${SUIT_HEART}`:
      return '🂵'
    case `${VALUE_FOUR}${SUIT_HEART}`:
      return '🂴'
    case `${VALUE_THREE}${SUIT_HEART}`:
      return '🂳'
    case `${VALUE_TWO}${SUIT_HEART}`:
      return '🂲'
    case `${VALUE_ACE}${SUIT_SPADE}`:
      return '🂡'
    case `${VALUE_KING}${SUIT_SPADE}`:
      return '🂮'
    case `${VALUE_QUEEN}${SUIT_SPADE}`:
      return '🂭'
    case `${VALUE_JACK}${SUIT_SPADE}`:
      return '🂫'
    case `${VALUE_TEN}${SUIT_SPADE}`:
      return '🂪'
    case `${VALUE_NINE}${SUIT_SPADE}`:
      return '🂩'
    case `${VALUE_EIGHT}${SUIT_SPADE}`:
      return '🂨'
    case `${VALUE_SEVEN}${SUIT_SPADE}`:
      return '🂧'
    case `${VALUE_SIX}${SUIT_SPADE}`:
      return '🂦'
    case `${VALUE_FIVE}${SUIT_SPADE}`:
      return '🂥'
    case `${VALUE_FOUR}${SUIT_SPADE}`:
      return '🂤'
    case `${VALUE_THREE}${SUIT_SPADE}`:
      return '🂣'
    case `${VALUE_TWO}${SUIT_SPADE}`:
      return '🂢'
    default:
      return '🂠'
  }
}

export default function Card(props: { card: C }) {
  return (
    <h1 className='uk-heading-2xlarge uk-text-center'>{renderSwitch(props.card)}</h1>
  )
}
