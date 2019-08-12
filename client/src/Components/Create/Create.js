import React, { Component } from 'react'

export default class Create extends Component {
    // state to store data from the input fields
    state = {
        name: '',
        email: '',
        gender: ''
    }

    // takes event as an argument
    handleInput = e => {
        // will set the state from the item with the name of the event target to the value of the event target
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <div>
                <input name='name' value={this.state.name} placeholder="Name..." onChange={this.handleInput} />
                <input name='email' value={this.state.email} placeholder="Email..." onChange={this.handleInput} />
                <select name='gender' onClick={this.handleInput}>
                    <option defaultValue='select a gender'>Select a gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>other</option>
                </select>
            </div>
        )
    }
}
