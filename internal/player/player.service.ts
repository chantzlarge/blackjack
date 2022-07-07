import Player from './player'
import PlayerRepository from './player.repository'

export default class PlayerService {
  playerRepository: PlayerRepository

  constructor(playerRepository: PlayerRepository) {
    this.playerRepository = playerRepository
  }

  CreatePlayer (tableId: string): Player {
    return new Player(tableId)
  }

  GetPlayer (id: string): Player {
    return new Player('')
  }

  DeletePlayer () {
    // TODO
  }
}
