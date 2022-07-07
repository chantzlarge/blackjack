import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { createTable } from '../table.slice';

export default function CreateTableForm() {
    const [inputs, setInputs] = useState({})
    const dispatch = useDispatch<AppDispatch>()

    const handleChange = (event: { target: { name: any; value: any } }) => {
        setInputs(values => ({ ...values, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        dispatch(createTable())
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='uk-margin'>
                <button className='uk-button uk-button-primary'>CREATE TABLE</button>
            </div>
        </form>
    )
}
