import SessionRepository from './session.repository'
import TableRepository from './table.repository'
import Player from './player'
import { State } from './table'
import { HandState } from './hand'

export const enum PlayerState {
  Play = 'play',
  Sit = 'sit'
}

export interface BetInput {
  Parameters: {
    SessionId: string
    Amount: number
  }
}

export interface BetOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Player
}

export interface BuyInsuranceInput {
  Parameters: {
    SessionId: string
  }
}

export interface BuyInsuranceOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Player
}

export interface GetCurrentPlayerInput {
  Parameters: {
    SessionId: string
  }
}

export interface GetCurrentPlayerOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Player
}

export interface HitInput {
  Parameters: {
    HandId: string
    SessionId: string
  }
}

export interface HitOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Player
}

export interface LeaveTableInput {
  Parameters: {
    SessionId: string
  }
}

export interface LeaveTableOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Player
}

export interface SitInput {
  Parameters: {
    SessionId: string
  }
}

export interface SitOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Player
}

export interface SplitInput {
  Parameters: {
    SessionId: string
  }
}

export interface SplitOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Player
}

export interface StandInput {
  Parameters: {
    HandId: string
    SessionId: string
  }
}

export interface StandOutput {
  Errors?: string[]
  Ok: boolean
  Response?: Player
}

export default class PlayerService {
  sessionRepository: SessionRepository
  tableRepository: TableRepository

  constructor (
    sessionRepository: SessionRepository,
    tableRepository: TableRepository
  ) {
    this.sessionRepository = sessionRepository
    this.tableRepository = tableRepository
  }

  Bet (input: BetInput): BetOutput {
    const player = this.tableRepository.SelectPlayerBySessionId(input.Parameters.SessionId)
    const table = this.tableRepository.SelectTableBySessionId(input.Parameters.SessionId)

    if (player == null) {
      return {
        Errors: ['player not found'],
        Ok: false
      }
    } else if (table == null) {
      return {
        Errors: ['table not found'],
        Ok: false
      }
    } else if (table.MaxBet < (player?.CurrentBet + input.Parameters.Amount)) {
      return {
        Errors: ['bet amount is more than table maximum'],
        Ok: false
      }
    } else if (table.MinBet > (player?.CurrentBet + input.Parameters.Amount)) {
      return {
        Errors: ['bet amount is less than table minimum'],
        Ok: false
      }
    } else if (player.Balance < input.Parameters.Amount) {
      return {
        Errors: ['bet amount exceeds player balance'],
        Ok: false
      }
    }

    player.CurrentBet += input.Parameters.Amount
    player.Balance -= input.Parameters.Amount

    table.Players = table.Players.map(p => p.Id === player.Id ? player : p)

    const i = table.Players.findIndex(p => p.CurrentBet === 0)

    if (i === -1) {
      table.State = State.DealingToPlayers
    }

    this.tableRepository.UpdateTable(table)

    return {
      Ok: true,
      Response: player
    }
  }

  BuyInsurance (input: BuyInsuranceInput): BuyInsuranceOutput {
    return {
      Ok: true
    }
  }

  GetCurrentPlayer (input: GetCurrentPlayerInput): GetCurrentPlayerOutput {
    const player = this.tableRepository.SelectPlayerBySessionId(input.Parameters.SessionId)

    if (player == null) {
      return {
        Ok: false
      }
    }

    return {
      Ok: true,
      Response: player
    }
  }

  Hit (input: HitInput): HitOutput {
    const table = this.tableRepository.SelectTableBySessionId(input.Parameters.SessionId)

    if (table == null) {
      return {
        Errors: ['table not found'],
        Ok: false
      }
    }

    const player = this.tableRepository.SelectPlayerBySessionId(input.Parameters.SessionId)

    if (player == null) {
      return {
        Errors: ['player not found'],
        Ok: false
      }
    }

    const hand = player.Hands.find(h => h.Id === input.Parameters.HandId)

    if (hand == null) {
      return {
        Errors: ['hand not found'],
        Ok: false
      }
    }

    const card = table.Shoe.DrawCard()

    if (card == null) {
      return {
        Errors: ['card not found'],
        Ok: false
      }
    }

    hand.DealCard(card)

    if (hand.Score() > 21) {
      hand.State = HandState.Bust
    }

    player.Hands = player.Hands.map(h => h.Id === hand.Id ? hand : h)
    table.Players = table.Players.map(p => p.Id === player.Id ? player : p)

    this.tableRepository.UpdateTable(table)

    return {
      Ok: true,
      Response: player
    }
  }

  LeaveTable (input: LeaveTableInput): LeaveTableOutput {
    const player = this.tableRepository.SelectPlayerBySessionId(input.Parameters.SessionId)

    if (player == null) {
      return {
        Ok: false
      }
    }

    this.tableRepository.DeletePlayer(player?.Id)

    return {
      Ok: true
    }
  }

  Sit (input: SitInput): SitOutput {
    const player = this.tableRepository.SelectPlayerBySessionId(input.Parameters.SessionId)

    return {
      Ok: true
    }
  }

  Split (input: SplitInput): SplitOutput {
    return {
      Ok: true
    }
  }

  Stand (input: StandInput): StandOutput {
    const player = this.tableRepository.SelectPlayerBySessionId(input.Parameters.SessionId)

    if (player == null) {
      return {
        Errors: ['player not found'],
        Ok: false
      }
    }

    const hand = player.Hands.find(h => h.Id === input.Parameters.HandId)

    if (hand == null) {
      return {
        Errors: ['hand not found'],
        Ok: false
      }
    }

    hand.State = HandState.Stand

    player.Hands = player.Hands.map(h => h.Id === hand.Id ? hand : h)

    this.tableRepository.UpdatePlayer(player)

    return {
      Ok: true,
      Response: player
    }
  }
}
