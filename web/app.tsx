import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Card from './components/card'
import CreateOrJoinTable from './components/create-or-join-table'
import Table from './components/table'

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CreateOrJoinTable />} />
                    <Route path="/card" element={<Card />} />
                    <Route path="/table" element={<Table />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
