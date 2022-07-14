import SessionRepository from "./session.repository";
import TableRepository from "./table.repository";
import Player from "./player";

export interface BetInput {
    Parameters: {
        SessionId: string
        Amount: string
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
        return {
            Ok: true,
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