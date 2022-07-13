import Table from "../internal/table/table"

import {
    CreateTableInput,
    CreateTableOutput,
    GetPlayerInput,
    GetPlayerOutput,
    GetTableInput,
    GetTableOutput,
    JoinTableInput,
    JoinTableOutput,
} from "../internal/table/table.service"

import {
    GetSessionInput,
    GetSessionOutput,
    GrantSessionInput,
    GrantSessionOutput,
} from "../internal/session/session.service"

import Session from "../internal/session/session"

const DEFAULT_ADDRESS = 'localhost:3000'

export default class API {
    session!: Session

    constructor() { }

    async CreateTable(input: CreateTableInput): Promise<CreateTableOutput> {
        const response = await fetch(`http://${DEFAULT_ADDRESS}/api/table/create`, {
            body: JSON.stringify(input),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const output: CreateTableOutput = await response.json()

        return output
    }

    async GetPlayer(input: GetPlayerInput): Promise<GetPlayerOutput> {
        const response = await fetch(`http://${DEFAULT_ADDRESS}/api/table/${input.Parameters.TableId}/player/${input.Parameters.PlayerId}`, {
            body: JSON.stringify(input),
            headers: {
                'Accept': 'application/json',
                'Authorization': `Basic ${Buffer.from(`${this.session.Id}:${this.session.Secret}`).toString('base64')}`,
            },
            method: 'POST'
        })

        const output: GetPlayerOutput = await response.json()

        return output
    }

    async GetSession(input: GetSessionInput): Promise<GetSessionOutput> {
        const response = await fetch(`http://${DEFAULT_ADDRESS}/api/session/${input.Parameters.SessionId}`, {
            headers: { Accept: 'application/json' },
            method: 'GET'
        })

        const output: GetSessionOutput = await response.json()

        return output
    }

    async GetTable(input: GetTableInput): Promise<GetTableOutput> {
        const response = await fetch(`http://${DEFAULT_ADDRESS}/api/table/${input.Parameters.TableId}`, {
            body: JSON.stringify(input),
            headers: {
                'Accept': 'application/json',
                'Authorization': `Basic ${Buffer.from(`${this.session.Id}:${this.session.Secret}`).toString('base64')}`,
            },
            method: 'GET'
        })

        const output: GetTableOutput = await response.json()

        return output
    }

    async GrantSession(input: GrantSessionInput): Promise<GrantSessionOutput> {
        const response = await fetch(`http://${DEFAULT_ADDRESS}/api/session/grant`, {
            headers: {
                Accept: 'application/json',
            },
            method: 'POST'
        })

        const output: GrantSessionOutput = await response.json()

        return output
    }

    async JoinTable(input: JoinTableInput): Promise<JoinTableOutput> {
        const sessionId = this.session?.Id
        const sessionSecret = this.session?.Secret

        const response = await fetch(`http://${DEFAULT_ADDRESS}/api/table/join`, {
            body: JSON.stringify(input),
            headers: {
                'Accept': 'application/json',
                'Authorization': `Basic ${Buffer.from(`${sessionId}:${sessionSecret}`).toString('base64')}`,
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const output: JoinTableOutput = await response.json()

        return output
    }

    WithSession(session: Session): API {
        this.session = session

        return this
    }
}
