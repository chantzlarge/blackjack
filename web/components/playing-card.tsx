import React from 'react'
import Card, {
  Kind,
  Suit
} from '../../internal/card/card'

function renderSwitch (card: Card): string {
  switch (`${card.Kind}${card.Suit}`) {
    case `${Kind.Ace}${Suit.Diamond}`:
      return '🂡'
    case `${Kind.King}${Suit.Diamond}`:
      return '🃎'
    case `${Kind.Queen}${Suit.Diamond}`:
      return '🃍'
    case `${Kind.Jack}${Suit.Diamond}`:
      return '🃋'
    case `${Kind.Ten}${Suit.Diamond}`:
      return '🃊'
    case `${Kind.Nine}${Suit.Diamond}`:
      return '🃉'
    case `${Kind.Eight}${Suit.Diamond}`:
      return '🃈'
    case `${Kind.Seven}${Suit.Diamond}`:
      return '🃇'
    case `${Kind.Six}${Suit.Diamond}`:
      return '🃆'
    case `${Kind.Five}${Suit.Diamond}`:
      return '🃅'
    case `${Kind.Four}${Suit.Diamond}`:
      return '🃄'
    case `${Kind.Three}${Suit.Diamond}`:
      return '🃃'
    case `${Kind.Two}${Suit.Diamond}`:
      return '🃂'
    case `${Kind.Ace}${Suit.Clubs}`:
      return '🃑'
    case `${Kind.King}${Suit.Clubs}`:
      return '🃞'
    case `${Kind.Queen}${Suit.Clubs}`:
      return '🃝'
    case `${Kind.Jack}${Suit.Clubs}`:
      return '🃛'
    case `${Kind.Ten}${Suit.Clubs}`:
      return '🃚'
    case `${Kind.Nine}${Suit.Clubs}`:
      return '🃙'
    case `${Kind.Eight}${Suit.Clubs}`:
      return '🃘'
    case `${Kind.Seven}${Suit.Clubs}`:
      return '🃗'
    case `${Kind.Six}${Suit.Clubs}`:
      return '🃖'
    case `${Kind.Five}${Suit.Clubs}`:
      return '🃕'
    case `${Kind.Four}${Suit.Clubs}`:
      return '🃔'
    case `${Kind.Three}${Suit.Clubs}`:
      return '🃓'
    case `${Kind.Two}${Suit.Clubs}`:
      return '🃒'
    case `${Kind.Ace}${Suit.Heart}`:
      return '🂱'
    case `${Kind.King}${Suit.Heart}`:
      return '🂾'
    case `${Kind.Queen}${Suit.Heart}`:
      return '🂽'
    case `${Kind.Jack}${Suit.Heart}`:
      return '🂻'
    case `${Kind.Ten}${Suit.Heart}`:
      return '🂺'
    case `${Kind.Nine}${Suit.Heart}`:
      return '🂹'
    case `${Kind.Eight}${Suit.Heart}`:
      return '🂸'
    case `${Kind.Seven}${Suit.Heart}`:
      return '🂷'
    case `${Kind.Six}${Suit.Heart}`:
      return '🂶'
    case `${Kind.Five}${Suit.Heart}`:
      return '🂵'
    case `${Kind.Four}${Suit.Heart}`:
      return '🂴'
    case `${Kind.Three}${Suit.Heart}`:
      return '🂳'
    case `${Kind.Two}${Suit.Heart}`:
      return '🂲'
    case `${Kind.Ace}${Suit.Spade}`:
      return '🂡'
    case `${Kind.King}${Suit.Spade}`:
      return '🂮'
    case `${Kind.Queen}${Suit.Spade}`:
      return '🂭'
    case `${Kind.Jack}${Suit.Spade}`:
      return '🂫'
    case `${Kind.Ten}${Suit.Spade}`:
      return '🂪'
    case `${Kind.Nine}${Suit.Spade}`:
      return '🂩'
    case `${Kind.Eight}${Suit.Spade}`:
      return '🂨'
    case `${Kind.Seven}${Suit.Spade}`:
      return '🂧'
    case `${Kind.Six}${Suit.Spade}`:
      return '🂦'
    case `${Kind.Five}${Suit.Spade}`:
      return '🂥'
    case `${Kind.Four}${Suit.Spade}`:
      return '🂤'
    case `${Kind.Three}${Suit.Spade}`:
      return '🂣'
    case `${Kind.Two}${Suit.Spade}`:
      return '🂢'
    default:
      return '🂠'
  }
}

export default function PlayingCard (props: { card: Card }) {
  return (
    <span className='uk-text-center' style={{ fontSize: 'inherit' }}>{renderSwitch(props.card)}</span>
  )
}
