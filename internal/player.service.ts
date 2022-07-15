import SessionRepository from "./session.repository";
import TableRepository from "./table.repository";
import Player from "./player";
import { State } from "./table";

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
    Parameters?: {}
}

export interface StandOutput {
    Errors?: string[]
    Ok: boolean
    Response?: Player
}

export default class PlayerService {
    sessionRepository: SessionRepository
    tableRepository: TableRepository

    constructor(
        sessionRepository: SessionRepository,
        tableRepository: TableRepository,
    ) {
        this.sessionRepository = sessionRepository
        this.tableRepository = tableRepository
    }

    Bet(input: BetInput): BetOutput {
        const table = this.tableRepository.SelectTableBySessionId(input.Parameters.SessionId)

        if (!table) {
            return {
                Errors: ['table not found'],
                Ok: false,
            }
        } else if (table.MaxBet < input.Parameters.Amount) {
            return {
                Errors: ['bet amount is more than table maximum'],
                Ok: false,
            }
        } else if (table.MinBet > input.Parameters.Amount) {
            return {
                Errors: ['bet amount is less than table minimum'],
                Ok: false,
            }
        }

        const player = this.tableRepository.SelectPlayerBySessionId(input.Parameters.SessionId)

        if (!player) {
            return {
                Errors: ['player not found'],
                Ok: false,
            }
        } else if (input.Parameters.Amount > player.Balance) {
            return {
                Errors: ['bet amount exceeds player balance'],
                Ok: false,
            }
        }

        player.CurrentBet = input.Parameters.Amount
        player.Balance -= player.CurrentBet

        table.Players = table.Players.map(p => p.Id === player.Id ? player : p)

        let i = table.Players.findIndex(p => p.CurrentBet === 0)

        if (i === -1) {
            table.State = State.DealingToPlayers
        }

        this.tableRepository.UpdateTable(table)

        return {
            Ok: true,
            Response: player
        }
    }

    BuyInsurance(input: BuyInsuranceInput): BuyInsuranceOutput {
        return {
            Ok: true,
        }
    }

    GetCurrentPlayer(input: GetCurrentPlayerInput): GetCurrentPlayerOutput {
        const player = this.tableRepository.SelectPlayerBySessionId(input.Parameters.SessionId)

        if (!player) {
            return {
                Ok: false,
            }
        }

        return {
            Ok: true,
            Response: player
        }
    }

    Hit(input: HitInput): HitOutput {
        return {
            Ok: true,
        }
    }

    LeaveTable(input: LeaveTableInput): LeaveTableOutput {
        const player = this.tableRepository.SelectPlayerBySessionId(input.Parameters.SessionId)

        if (!player) {
            return {
                Ok: false,
            }
        }

        this.tableRepository.DeletePlayer(player?.Id)

        return {
            Ok: true,
        }
    }

    Sit(input: SitInput): SitOutput {
        return {
            Ok: true,
        }
    }

    Split(input: SplitInput): SplitOutput {
        return {
            Ok: true,
        }
    }

    Stand(input: StandInput): StandOutput {
        return {
            Ok: true,
        }
    }
}