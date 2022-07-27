import Hand from '../hand/hand'

export default class Dealer {
  readonly hand: Hand

  constructor (hand: Hand = new Hand()) {
    this.hand = hand
  }
}
