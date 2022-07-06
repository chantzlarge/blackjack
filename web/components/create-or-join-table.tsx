import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTable, joinTable } from '../table.slice'
import JoinTableForm from './join-table-form'
export default function CreateOrJoinTable () {
  const dispatch = useDispatch()

  return (
    <div className='uk-container'>
      <div className='uk-section'>
        <div className='uk-flex uk-flex-center uk-child-width-1-1 uk-text-center' data-uk-grid>
          <h1 className='uk-heading'>BLACKJACK</h1>
          <div className='uk-section'>
            <div>
              <button onClick={() => dispatch(createTable('message'))} className='uk-button uk-button-primary'>CREATE TABLE</button>
            </div>
            <hr className='uk-divider-small' />
            <div>
              <JoinTableForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
