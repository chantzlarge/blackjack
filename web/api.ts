import Table from '../internal/table/table'

import {
  CreatePlayerInput,
  CreatePlayerOutput,
  CurrentPlayerInput,
  CurrentPlayerOutput,
  GetPlayerInput,
  GetPlayerOutput,
} from '../internal/player/player.service'

import {
  CreateSessionInput,
  CreateSessionOutput,
  GetSessionInput,
  GetSessionOutput,
  UpdateSessionInput,
  UpdateSessionOutput
} from '../internal/session/session.service'

import {
  CreateTableInput,
  CreateTableOutput,
  GetTableInput,
  GetTableOutput,
  JoinTableInput,
  JoinTableOutput
} from '../internal/table/table.service'

import Session from '../internal/session/session'

const DEFAULT_ADDRESS = 'localhost:3000'

export default class API {
  session!: Session

  constructor () { }

  async CreateSession (input: CreateSessionInput): Promise<CreateSessionOutput> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/session`, {
      headers: { Accept: 'application/json' },
      method: 'POST'
    })

    const output: CreateSessionOutput = await response.json()

    return output
  }

  async CreatePlayer (input: CreatePlayerInput): Promise<CreatePlayerOutput> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/player`, {
      body: JSON.stringify(input),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const output: CreatePlayerOutput = await response.json()

    return output
  }


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


  async CurrentPlayer (input: CurrentPlayerInput): Promise<CurrentPlayerOutput> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/player/current`, {
      body: JSON.stringify(input),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const output: CurrentPlayerOutput = await response.json()

    return output
  }

  async GetPlayer (input: GetPlayerInput): Promise<GetPlayerOutput> {
    console.log(input)
    
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/player/${input.Parameters.PlayerId}`, {
      body: JSON.stringify(input),
      headers: {
        Accept: 'application/json',
      },
      method: 'GET'
    })

    const output: GetPlayerOutput = await response.json()

    return output
  }

  async GetSession (input: GetSessionInput): Promise<GetSessionOutput> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/session/${input.Parameters.SessionId}`, {
      headers: { Accept: 'application/json' },
      method: 'GET'
    })

    const output: GetSessionOutput = await response.json()

    return output
  }

  async GetTable (input: GetTableInput): Promise<GetTableOutput> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/table/${input.Parameters.TableId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET'
    })

    const output: GetTableOutput = await response.json()

    return output
  }

  async JoinTable (input: JoinTableInput): Promise<JoinTableOutput> {
    const sessionId = this.session?.Id
    const sessionSecret = this.session?.Secret

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

  async UpdateSession (input: UpdateSessionInput): Promise<UpdateSessionOutput> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/session/${input.Parameters.Id}`, {
      body: JSON.stringify(input),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT'
    })

    const output: UpdateSessionOutput = await response.json()

    return output
  }
}
