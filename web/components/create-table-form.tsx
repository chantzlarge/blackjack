import React from 'react'

export default class CreateTableForm extends React.Component<{}, { value: string }> {
    constructor(props: {}) {
        super(props)
        this.state = { value: '' }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event: { target: { value: any } }) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event: { preventDefault: () => void }) {
        alert('value: ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='uk-margin'>
                    <button className='uk-button uk-button-primary'>CREATE TABLE</button>
                </div>
            </form>
        )
    }
}
