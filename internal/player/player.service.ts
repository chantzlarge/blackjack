import Player from "./player";
import PlayerRepository from "./player.repository";

export interface CreatePlayerInput {
    Parameters: {
        SessionId: string
        TableId: string
    }
}

export interface CreatePlayerOutput {
    Errors?: string[]
    Ok: boolean
    Response?: Player
}

export interface CurrentPlayerInput {
    Parameters: {
        SessionId: string
    }
}

export interface CurrentPlayerOutput {
    Errors?: string[]
    Ok: boolean
    Response?: Player
}

export interface GetPlayerInput {
    Parameters: {
        PlayerId: string
    }
}

export interface GetPlayerOutput {
    Errors?: string[]
    Ok: boolean
    Response?: Player
}

export interface UpdatePlayerInput {
    Parameters: Player
}

export interface UpdatePlayerOutput {
    Errors?: string[]
    Ok: boolean
    Response?: Player
}

export default class PlayerService {
    playerRepository: PlayerRepository

    constructor(playerRepository: PlayerRepository) {
        this.playerRepository = playerRepository
    }

    CreatePlayer(input: CreatePlayerInput): CreatePlayerOutput {
        const player = new Player(
            input.Parameters.SessionId,
            input.Parameters.TableId,
        )

        this.playerRepository.InsertPlayer(player)

        return {
            Ok: true,
            Response: player
        }
    }

    CurrentPlayer(input: CurrentPlayerInput): CurrentPlayerOutput { 
        const player = this.playerRepository.SelectPlayerBySessionId(input.Parameters.SessionId)

        return {
            Ok: true,
            Response: player
        }
    }

    GetPlayer(input: GetPlayerInput): GetPlayerOutput {
        const player = this.playerRepository.SelectPlayerById(input.Parameters.PlayerId)

        return {
            Ok: true,
            Response: player
        }
    }
    
    UpdatePlayer(input: UpdatePlayerInput): UpdatePlayerOutput { 
        const player = input.Parameters

        this.playerRepository.UpdatePlayer(player)

        return {
            Ok: true,
            Response: player
        }
    }
}