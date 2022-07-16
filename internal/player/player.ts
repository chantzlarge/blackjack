import { v4 as uuidv4 } from 'uuid'
import Hand from '../hand/hand'

export default class Player {
  Id: string = uuidv4()
  CurrentBet: number = 0
  PreviousBet: number = 0
  Balance: number = 500
  Hands: Hand[] = []
}
