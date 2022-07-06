import React from 'react'

const ws = new WebSocket('ws://localhost:3001')

ws.onopen = (ev) => {
  console.log(ev)
  ws.send('message')
}

ws.onmessage = (ev) => {
  console.log(ev)
}

export default class CreateOrJoinTable extends React.Component {
  render () {
    return (
      <div className='uk-container'>
        <div className='uk-section'>
          <div className='uk-flex uk-flex-center uk-child-width-1-1 uk-text-center' data-uk-grid>
            <h1 className='uk-heading'>BLACKJACK</h1>
            <div className='uk-section'>
              <div>
                <a className='uk-button uk-button-primary'>CREATE TABLE</a>
              </div>
              <hr className='uk-divider-small' />
              <div>
                <form action='' className='uk-form'>
                  <div className='uk-margin'>
                    <input className='uk-input uk-width-small' type='text' name='' placeholder='CODE' id='' />
                  </div>
                  <div className='uk-margin'>
                    <a className='uk-button uk-button-default'>JOIN TABLE</a>
                  </div>
                </form>
              </div>
            </div>
            <div className='uk-section'>
              <a className='uk-button uk-button-link'>SETTINGS</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
