import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../store'
import CreateTableForm from './create-table-form'
import JoinTableForm from './join-table-form'

export default function CreateOrJoinTable() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const player = useSelector((state: RootState) => state.player)
  const session = useSelector((state: RootState) => state.session)
  const table = useSelector((state: RootState) => state.table)

  useEffect(() => {
    if (session && player && table) {
      navigate('/table')
    }
  })

  return (
    <>
      <div className='uk-section uk-section-xlarge'>
        <div className='uk-container uk-container-small'>
          <div className='uk-child-width-1-1' data-uk-grid>
            <div className='uk-margin-large'>
              <h1 className='uk-heading-xlarge uk-text-center'>BLACKJACK</h1>
            </div>
            <div className='uk-margin-large'>
              <div className='uk-margin-medium'>
                <CreateTableForm />
              </div>
              <div className='uk-margin-medium'>
                <hr />
              </div>
              <div className='uk-margin-medium'>
                <JoinTableForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='uk-section uk-section-large uk-section-muted'>
        <div className='uk-container'>
          <div className='uk-flex uk-flex-center'>
            <ul className='uk-iconnav'>
              <li><a href='https://github.com/chantzlarge/blackjack' target='_blank' data-uk-icon='icon:github;' rel='noreferrer' /> </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
