import React from 'react'
import Card, {
  Kind,
  Suit
} from '../../internal/card/card'

function renderSwitch (card: Card): string {
  switch (`${card.kind}${card.suit}`) {
    case `${Kind.ACE}${Suit.CLUBS}`:
      return '🃑'
    case `${Kind.KING}${Suit.CLUBS}`:
      return '🃞'
    case `${Kind.QUEEN}${Suit.CLUBS}`:
      return '🃝'
    case `${Kind.JACK}${Suit.CLUBS}`:
      return '🃛'
    case `${Kind.QUEEN}${Suit.CLUBS}`:
      return '🃚'
    case `${Kind.TEN}${Suit.CLUBS}`:
      return '🃚'
    case `${Kind.NINE}${Suit.CLUBS}`:
      return '🃙'
    case `${Kind.EIGHT}${Suit.CLUBS}`:
      return '🃘'
    case `${Kind.SEVEN}${Suit.CLUBS}`:
      return '🃗'
    case `${Kind.SIX}${Suit.CLUBS}`:
      return '🃖'
    case `${Kind.FIVE}${Suit.CLUBS}`:
      return '🃕'
    case `${Kind.FOUR}${Suit.CLUBS}`:
      return '🃔'
    case `${Kind.THREE}${Suit.CLUBS}`:
      return '🃓'
    case `${Kind.TWO}${Suit.CLUBS}`:
      return '🃒'
    case `${Kind.ACE}${Suit.DIAMONDS}`:
      return '🂡'
    case `${Kind.KING}${Suit.DIAMONDS}`:
      return '🃎'
    case `${Kind.QUEEN}${Suit.DIAMONDS}`:
      return '🃍'
    case `${Kind.JACK}${Suit.DIAMONDS}`:
      return '🃋'
    case `${Kind.QUEEN}${Suit.DIAMONDS}`:
      return '🃊'
    case `${Kind.TEN}${Suit.DIAMONDS}`:
      return '🃊'
    case `${Kind.NINE}${Suit.DIAMONDS}`:
      return '🃉'
    case `${Kind.EIGHT}${Suit.DIAMONDS}`:
      return '🃈'
    case `${Kind.SEVEN}${Suit.DIAMONDS}`:
      return '🃇'
    case `${Kind.SIX}${Suit.DIAMONDS}`:
      return '🃆'
    case `${Kind.FIVE}${Suit.DIAMONDS}`:
      return '🃅'
    case `${Kind.FOUR}${Suit.DIAMONDS}`:
      return '🃄'
    case `${Kind.THREE}${Suit.DIAMONDS}`:
      return '🃃'
    case `${Kind.TWO}${Suit.DIAMONDS}`:
      return '🃂'
    case `${Kind.ACE}${Suit.HEARTS}`:
      return '🂱'
    case `${Kind.KING}${Suit.HEARTS}`:
      return '🂾'
    case `${Kind.QUEEN}${Suit.HEARTS}`:
      return '🂽'
    case `${Kind.JACK}${Suit.HEARTS}`:
      return '🂻'
    case `${Kind.QUEEN}${Suit.HEARTS}`:
      return '🂺'
    case `${Kind.TEN}${Suit.HEARTS}`:
      return '🂺'
    case `${Kind.NINE}${Suit.HEARTS}`:
      return '🂹'
    case `${Kind.EIGHT}${Suit.HEARTS}`:
      return '🂸'
    case `${Kind.SEVEN}${Suit.HEARTS}`:
      return '🂷'
    case `${Kind.SIX}${Suit.HEARTS}`:
      return '🂶'
    case `${Kind.FIVE}${Suit.HEARTS}`:
      return '🂵'
    case `${Kind.FOUR}${Suit.HEARTS}`:
      return '🂴'
    case `${Kind.THREE}${Suit.HEARTS}`:
      return '🂳'
    case `${Kind.TWO}${Suit.HEARTS}`:
      return '🂲'
    case `${Kind.ACE}${Suit.SPADES}`:
      return '🂡'
    case `${Kind.KING}${Suit.SPADES}`:
      return '🂮'
    case `${Kind.QUEEN}${Suit.SPADES}`:
      return '🂭'
    case `${Kind.JACK}${Suit.SPADES}`:
      return '🂫'
    case `${Kind.QUEEN}${Suit.SPADES}`:
      return '🂪'
    case `${Kind.TEN}${Suit.SPADES}`:
      return '🂪'
    case `${Kind.NINE}${Suit.SPADES}`:
      return '🂩'
    case `${Kind.EIGHT}${Suit.SPADES}`:
      return '🂨'
    case `${Kind.SEVEN}${Suit.SPADES}`:
      return '🂧'
    case `${Kind.SIX}${Suit.SPADES}`:
      return '🂦'
    case `${Kind.FIVE}${Suit.SPADES}`:
      return '🂥'
    case `${Kind.FOUR}${Suit.SPADES}`:
      return '🂤'
    case `${Kind.THREE}${Suit.SPADES}`:
      return '🂣'
    case `${Kind.TWO}${Suit.SPADES}`:
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
