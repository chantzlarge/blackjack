import {
  GetCurrentPlayerInput,
  GetCurrentPlayerOutput,
} from '../internal/player.service'

import {
  GrantSessionInput,
  GrantSessionOutput,
  GetCurrentSessionInput,
  GetCurrentSessionOutput,
  RevokeSessionInput,
  RevokeSessionOutput
} from '../internal/session.service'

import {
  CreateTableInput,
  CreateTableOutput,
  GetCurrentTableInput,
  GetCurrentTableOutput,
  JoinTableInput,
  JoinTableOutput
} from '../internal/table.service'

import Session from '../internal/session'

const DEFAULT_ADDRESS = 'localhost:3000'

export default class API {
  session!: Session

  constructor () { }

  async CreateTable (input: CreateTableInput): Promise<CreateTableOutput> {
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

  async GrantSession (input?: GrantSessionInput): Promise<GrantSessionOutput> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/session`, {
      headers: { 
        Accept: 'application/json' 
      },
      method: 'GET'
    })

    const output: GrantSessionOutput = await response.json()

    return output
  }

  async GetCurrentPlayer (input: GetCurrentPlayerInput): Promise<GetCurrentPlayerOutput> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/player/current`, {
      body: JSON.stringify(input),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const output: GetCurrentPlayerOutput = await response.json()

    return output
  }

  async GetCurrentSession (input: GetCurrentSessionInput): Promise<GetCurrentSessionOutput> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/session/current`, {
      body: JSON.stringify(input),
      headers: { 
        Accept: 'application/json', 
        'Content-Type': 'application/json' 
      },
      method: 'POST'
    })

    const output: GetCurrentSessionOutput = await response.json()

    return output
  }

  async GetCurrentTable (input: GetCurrentTableInput): Promise<GetCurrentTableOutput> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/table/current`, {
      body: JSON.stringify(input),
      headers: { 
        Accept: 'application/json', 
        'Content-Type': 'application/json' 
      },
      method: 'POST'
    })

    const output: GetCurrentTableOutput = await response.json()

    return output
  }

  async JoinTable (input: JoinTableInput): Promise<JoinTableOutput> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/table/join`, {
      body: JSON.stringify(input),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const output: JoinTableOutput = await response.json()

    return output
  }

  async RevokeSession (input: RevokeSessionInput): Promise<RevokeSessionOutput> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/session/revoke`, {
      body: JSON.stringify(input),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const output: RevokeSessionOutput = await response.json()

    return output
  }
}
