import { v4 as uuidv4 } from 'uuid'
import Hand from '../hand/hand'

export const enum State {
  PLAYING = 'playing',
  SITTING = 'sitting'
}

export default class Player {
  Id: string = uuidv4()
  CurrentBet: number = 0
  PreviousBet: number = 0
  Balance: number = 500
  Hands: Hand[] = []
  State = State.SITTING

  Play(): Player {
    this.State = State.PLAYING
    
    return this
  }

  Sit(): Player {
    this.State = State.SITTING
    
    return this
  }
}
