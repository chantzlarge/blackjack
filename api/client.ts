import { Action } from '../internal/game/game.controller'
import Session from 'session/session'

const DEFAULT_ADDRESS = '192.168.1.3:3000'

export default class Client {
  ws: WebSocket

  constructor () {
    this.ws = this.Connect()
  }

  Bet (session: Session, amount: number) {
    this.ws.send(JSON.stringify({
      action: Action.BET,
      payload: {
        session: session,
        amount: amount
      }
    }))
  }

  BuyInsurance (session: Session) {
    this.ws.send(JSON.stringify({
      action: Action.BUY_INSURANCE,
      payload: {
        session: session
      }
    }))
  }

  DeclineInsurance (session: Session) {
    this.ws.send(JSON.stringify({
      action: Action.DECLINE_INSURANCE,
      payload: {
        session: session
      }
    }))
  }

  Connect (): WebSocket {
    const ws = new WebSocket(`ws://${DEFAULT_ADDRESS}/api/connect`)

    ws.onopen = (event) => console.log(event)
    ws.onmessage = (event) => console.log(event)

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
    this.ws.send(JSON.stringify({
      action: Action.HIT,
      payload: {
        session: session
      }
    }))
  }

  Stand (session: Session) {
    this.ws.send(JSON.stringify({
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
    this.ws.send(JSON.stringify({
      action: Action.LEAVE,
      payload: {
        session: session
      }
    }))
  }
}
