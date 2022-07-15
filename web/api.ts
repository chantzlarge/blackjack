import {
  BetInput,
  BetOutput,
  GetCurrentPlayerInput,
  GetCurrentPlayerOutput,
  HitInput,
  HitOutput,
  LeaveTableInput,
  LeaveTableOutput,
  StandInput,
  StandOutput
} from '../internal/player.service'

import {
  GrantSessionInput,
  GrantSessionOutput,
  GetCurrentSessionInput,
  GetCurrentSessionOutput
} from '../internal/session.service'

import {
  CreateTableInput,
  CreateTableOutput,
  GetCurrentTableInput,
  GetCurrentTableOutput,
  JoinTableInput,
  JoinTableOutput
} from '../internal/table.service'

const DEFAULT_ADDRESS = '192.168.1.2:3000'

export default class API {
  ws: WebSocket

  constructor () {
    this.ws = new WebSocket(`ws://${DEFAULT_ADDRESS}/api/websocket`)

    this.ws.onopen = (event) => console.log(event)
    this.ws.onmessage = (event) => console.log(event)
  }

  async Bet (input: BetInput): Promise<BetOutput> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/player/bet`, {
      body: JSON.stringify(input),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const output: BetOutput = await response.json()

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

  async Hit (input: HitInput): Promise<HitOutput> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/player/hit`, {
      body: JSON.stringify(input),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const output: HitOutput = await response.json()

    return output
  }

  async Stand (input: StandInput): Promise<StandOutput> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/player/stand`, {
      body: JSON.stringify(input),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const output: StandOutput = await response.json()

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

  async LeaveTable (input: LeaveTableInput): Promise<LeaveTableOutput> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/player/leavetable`, {
      body: JSON.stringify(input),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const output: LeaveTableOutput = await response.json()

    return output
  }
}
