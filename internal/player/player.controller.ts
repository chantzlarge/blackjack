import { Request, Response } from 'express';
import PlayerService, { CreatePlayerInput, CurrentPlayerInput, GetPlayerInput } from "./player.service"

export default class PlayerController {
    playerService: PlayerService

    constructor(playerService: PlayerService) {
        this.playerService = playerService
    }

    CreatePlayer(req: Request, res: Response) {
        const input: CreatePlayerInput = req.body

        const output = this.playerService.CreatePlayer(input)

        res.json(output)
    }

    CurrentPlayer(req: Request, res: Response) {
        const input: CurrentPlayerInput = req.body

        const output = this.playerService.CurrentPlayer(input)
        
        res.json(output)
    }

    GetPlayer(req: Request, res: Response) {
        const input: GetPlayerInput = {
            Parameters: {
                PlayerId: req.params['playerId']
            }
        }

        const output = this.playerService.GetPlayer(input)

        res.json(output)
    }
}