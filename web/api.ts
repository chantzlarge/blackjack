const address = 'localhost:3000'

export default class API {
    ws: WebSocket = new WebSocket(`ws://${address}/socket`)

    constructor() {
        this.ws.onopen = (event) => this.onOpen(event)
        this.ws.onmessage = (event) => this.onMessage(event)
    }

    async CreateSession() {
        const response = await fetch(`http://${address}/api/session/create`, {
            method: 'POST'
        })

        const data = await response.json()

        return data
    }

    async CreateTable() {
        const response = await fetch(`http://${address}/api/table/create`, {
            method: 'POST'
        })

        const data = await response.json()

        return data
    }

    async CurrentSession() {
        const response = await fetch(`http://${address}/api/session/current`, {
            method: 'GET'
        })

        const data = await response.json()

        return data
    }

    onMessage(event: any) {
        console.log(event)
    }

    onOpen(event: any) {
        console.log(event)
    }
}