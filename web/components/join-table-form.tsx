import React from 'react'

export default class JoinTableForm extends React.Component<{}, { value: string }> {
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
        alert('A name was submitted: ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='uk-margin'>
                    <input className='uk-input uk-width-small' type='text' name='' placeholder='CODE' id='' value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className='uk-margin'>
                    <button className='uk-button uk-button-default'>JOIN TABLE</button>
                </div>
            </form>
        )
    }
}
