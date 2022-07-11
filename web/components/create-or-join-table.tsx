import React from 'react'
import CreateTableForm from './create-table-form'
import JoinTableForm from './join-table-form'

export default function CreateOrJoinTable () {
  return (
    <div className='uk-section uk-section-xlarge'>
      <div className='uk-container'>
        <div className='uk-flex uk-flex-center uk-child-width-1-1 uk-text-center' data-uk-grid>
          <div>
            <h1 className='uk-heading-large'>BLACKJACK</h1>
          </div>
          <div className='uk-section-large'>
            <div>
              <CreateTableForm />
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
