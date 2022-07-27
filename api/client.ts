import { Action } from '../lib/game/game.controller'
import Game from '../lib/game/game'
import Session from '../lib/session/session'

const DEFAULT_ADDRESS = '192.168.1.3:3000'

export interface GameChangeEventInit extends EventInit {
  game: Game
}

export class GameChangeEvent extends Event {
  readonly game: Game
  
  constructor(gameChangeEventInit: GameChangeEventInit) {
    super('gameChange', gameChangeEventInit)

    this.game = gameChangeEventInit.game
  }
}

export default class Client extends EventTarget {
  webSocket: WebSocket

  constructor () {
    super()

    this.webSocket = this.connect()
  }

  Bet (session: Session, amount: number) {
    this.webSocket.send(JSON.stringify({
      action: Action.BET,
      payload: {
        session: session,
        amount: amount
      }
    }))
  }

  BuyInsurance (session: Session) {
    this.webSocket.send(JSON.stringify({
      action: Action.BUY_INSURANCE,
      payload: {
        session: session
      }
    }))
  }

  DeclineInsurance (session: Session) {
    this.webSocket.send(JSON.stringify({
      action: Action.DECLINE_INSURANCE,
      payload: {
        session: session
      }
    }))
  }

  connect (): WebSocket {
    const ws = new WebSocket(`ws://${DEFAULT_ADDRESS}/api/connect`)
    ws.onmessage = (ev) => this.onMessage(ev)
    ws.onopen = (ev) => this.onOpen(ev)
    
    return ws
  }

  async Create (): Promise<any> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/create`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    return await response.json()
  }

  async Current (session: Session): Promise<any> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/current`, {
      body: JSON.stringify(session),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    return await response.json()
  }

  Hit (session: Session) {
    this.webSocket.send(JSON.stringify({
      action: Action.HIT,
      payload: {
        session: session
      }
    }))
  }

  Stand (session: Session) {
    this.webSocket.send(JSON.stringify({
      action: Action.STAND,
      payload: {
        session: session
      }
    }))
  }

  async Join (code: string): Promise<any> {
    const response = await fetch(`http://${DEFAULT_ADDRESS}/api/join`, {
      body: JSON.stringify({ code: code }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    return await response.json()
  }

  Leave (session: Session) {
    this.webSocket.send(JSON.stringify({
      action: Action.LEAVE,
      payload: {
        session: session
      }
    }))
  }

  onMessage(ev: any): void {
    const game = JSON.parse(ev.data)

    console.log(game)

    this.dispatchEvent(new GameChangeEvent({ game: game }))
  }

  onOpen(ev: any): void {
    console.log(ev)
  }
}
