import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const ws = new WebSocket('ws://localhost:3000/socket')

ws.onopen = (event) => {
  console.log(event)
}

ws.onmessage = (event) => {
  console.log(event)
}

// export const buyInsurance = createAsyncThunk('players/buyInsurance', async () => {
//   console.log('buying insurance...')

//   const response = await fetch('http://localhost:3000/api/player/current', { method: 'GET' })
//   const data = await response.json()

//   return data
// })

export const getCurrentPlayer = createAsyncThunk('players/getCurrentPlayer', async () => {
  console.log('getting current player...')

  const response = await fetch('http://localhost:3000/api/player/current', {
    method: 'GET'
  })
  const data = await response.json()

  return data
})

export const hit = createAsyncThunk('players/hit', async () => {
  console.log('hit...')

  ws.send(JSON.stringify({
    // message: 'message'
  }))
})

export const placeBet = createAsyncThunk('players/placeBet', async () => {
  console.log('placing bet...')

  ws.send(JSON.stringify({
    amount: 5.00
  }))
})

// export const sitOut = createAsyncThunk('players/sitOut', async () => {
//   console.log('sitting out...')

//   const response = await fetch('http://localhost:3000/api/player/current', { method: 'GET' })
//   const data = await response.json()

//   return data
// })

// export const skipInsurance = createAsyncThunk('players/skipInsurance', async () => {
//   console.log('skipping insurance...')

//   const response = await fetch('http://localhost:3000/api/player/current', { method: 'GET' })
//   const data = await response.json()

//   return data
// })

export const playerSlice = createSlice({
  name: 'players',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(buyInsurance.fulfilled, (state, action) => {
    //   const player = action.payload

    //   console.log(`bought insurance: ${JSON.stringify(player)}`)

    //   return player
    // })
    builder.addCase(getCurrentPlayer.fulfilled, (state, action) => {
      const player = action.payload

      console.log(`got current player: ${JSON.stringify(player)}`)

      return player
    })
    // builder.addCase(hit.fulfilled, (state, action) => {
    //   const player = action.payload

    //   console.log(`got current player: ${JSON.stringify(player)}`)

    //   return player
    // })
    builder.addCase(placeBet.fulfilled, (state, action) => {
      const player = action.payload

      console.log(`bet placed: ${JSON.stringify(player)}`)

      return player
    })
    // builder.addCase(sitOut.fulfilled, (state, action) => {
    //   const player = action.payload

    //   console.log(`sat out: ${JSON.stringify(player)}`)

    //   return player
    // })
    // builder.addCase(skipInsurance.fulfilled, (state, action) => {
    //   const player = action.payload

    //   console.log(`insurance skipped: ${JSON.stringify(player)}`)

    //   return player
    // })
  }
})
