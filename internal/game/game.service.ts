import Session from "../session/session";
import Player from "../player/player";
import Table from "../table/table";
import SessionRepository from "../session/session.repository";
import TableRepository from "../table/table.repository";
import Game from "./game";

export default class GameService {
    sessionRepository: SessionRepository
    tableRepository: TableRepository

    constructor(
        sessionRepository: SessionRepository,
        tableRepository: TableRepository,
    ) {
        this.sessionRepository = sessionRepository
        this.tableRepository = tableRepository
    }

    Authenticate(sessionId: string, sessionSecret: string): Session {
        const session = this.sessionRepository.SelectSessionById(sessionId)

        if (session.secret !== sessionSecret) {
            throw new Error('')
        }

        return session
    }

    Bet(session: Session, amount: number): Game {
        const table = this.tableRepository.SelectTableById(session.tableId).Bet(session.playerId, amount)
        const player = table.GetPlayer(session.playerId)

        this.tableRepository.UpdateTable(table)

        return new Game(player, session, table)
    }

    Create(): Game {
        const player = new Player()
        const table = new Table().AddPlayer(player)
        const session = new Session(player.id, table.id)

        this.sessionRepository.InsertSession(session)
        this.tableRepository.InsertTable(table)

        return new Game(player, session, table)
    }

    Current(session: Session): Game {
        const table = this.tableRepository.SelectTableById(session.tableId)
        const player = table.GetPlayer(session.playerId)

        return new Game(player, session, table)
    }

    Hit(session: Session): Game {
        const table = this.tableRepository.SelectTableById(session.tableId).Hit(session.playerId)
        const player = table.GetPlayer(session.playerId)

        this.tableRepository.UpdateTable(table)

        return new Game(player, session, table)
    }

    Join(): void {
        throw new Error('not implemented')
    }

    Leave(session: Session): void {
        const table = this.tableRepository.SelectTableById(session.tableId).RemovePlayer(session.playerId)
        
        this.sessionRepository.DeleteSession(session.id)
        this.tableRepository.UpdateTable(table)
    }

    Sit(session: Session): Game {
        const table = this.tableRepository.SelectTableById(session.tableId).Sit(session.playerId)
        const player = table.GetPlayer(session.playerId)

        this.tableRepository.UpdateTable(table)

        return new Game(player, session, table)
    }

    Stand(session: Session): Game {
        const table = this.tableRepository.SelectTableById(session.tableId).Stand(session.playerId)
        const player = table.GetPlayer(session.playerId)

        this.tableRepository.UpdateTable(table)

        return new Game(player, session, table)
    }
}