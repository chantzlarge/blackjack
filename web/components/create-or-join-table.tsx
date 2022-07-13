import React from 'react'
import CreateTableForm from './create-table-form'
import JoinTableForm from './join-table-form'

export default function CreateOrJoinTable() {
  return (
    <>
      <div className='uk-section uk-section-large'>
        <div className='uk-container'>
          <div className='uk-text-center'>
            <h1 className='uk-heading-xlarge'>BLACKJACK</h1>
          </div>
        </div>
      </div>
      <div className='uk-section uk-section-xlarge'>
        <div className='uk-container'>
          <div className='uk-flex uk-flex-center uk-child-width-1-1' data-uk-grid>
            <div>
              <CreateTableForm />
            </div>
            <div>
              <hr></hr>
            </div>
            <div>
              <JoinTableForm />
            </div>
          </div>
        </div>
      </div>
      <div className='uk-section uk-section-large uk-section-muted'>
        <div className='uk-container'>
          <div className='uk-flex uk-flex-center'>
            <ul className='uk-iconnav'>
              <li><a href="https://github.com/chantzlarge" target={'_blank'} data-uk-icon="icon:github;"></a> </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}