import Player from '../player/player'
import Session from '../session/session'
import Table from '../table/table'

export default class Game {
  player: Player
  readonly session: Session
  readonly table: Table

  constructor (
    player: Player,
    session: Session,
    table: Table
  ) {
    this.player = player
    this.session = session
    this.table = table
  }
}
