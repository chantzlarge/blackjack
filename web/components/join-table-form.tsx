import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { joinTable } from '../table.slice'

export default function JoinTableForm() {
  const [inputs, setInputs] = useState({
    code: ''
  })

  const dispatch = useDispatch()

  const handleChange = (event: { target: { name: any, value: any } }) => {
    setInputs(values => ({ ...values, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    // dispatch(joinTable(inputs.code))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='uk-margin'>
          <input className='uk-input uk-width-expand' type='text' name='code' placeholder='CODE' id='' value={inputs.code} onChange={handleChange} />
        </div>
        <div className='uk-margin'>
          <button className='uk-button uk-button-default uk-width-expand uk-border-rounded'>JOIN TABLE</button>
        </div>
      </form>
    </div>
  )
}
