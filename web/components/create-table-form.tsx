import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTable } from '../table.slice';

export default function CreateTableForm() {
    const [inputs, setInputs] = useState({})
    const dispatch = useDispatch()

    const handleChange = (event: { target: { name: any; value: any } }) => {
        const name = event.target.name
        const value = event.target.value

        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        dispatch(createTable(''))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='uk-margin'>
                <button className='uk-button uk-button-primary'>CREATE TABLE</button>
            </div>
        </form>
    )
}
