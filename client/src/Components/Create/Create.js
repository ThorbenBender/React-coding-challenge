import React, { Component } from 'react'

// import uuid
import uuid from 'uuid'

export default class Create extends Component {
    // state to store data from the input fields
    state = {
        name: '',
        email: '',
        gender: '',
        error: null
    }

    // takes event as an argument
    handleInput = e => {
        // will set the state from the item with the name of the event target to the value of the event target
        this.setState({[e.target.name]: e.target.value})
    }

    submitInput = e => {
        // will prevent reload
        e.preventDefault();
        // check if every input field is filled out
        if (!this.state.name || !this.state.email || !this.state.gender) {
            // if not it will set the state from error to missing credentials
            this.setState({error: 'Missing credentials'})
            // and return to null to end the function
            return null
        }
        // else
        // create a user object with the values from state
        let user = {
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender,
            id: uuid()
        }
        // call the function from the parent element with user object
        this.props.createUser(user)
        // change the view to ViewAndUpdate
        this.props.changeView('ViewAndUpdate')
    }
    render() {
        return (
            <div>
                <input name='name' type='text' value={this.state.name} placeholder="Name..." onChange={this.handleInput} />
                <input name='email' type='email' value={this.state.email} placeholder="Email..." onChange={this.handleInput} />
                <select name='gender' onClick={this.handleInput}>
                    <option defaultValue='select a gender'>Select a gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>other</option>
                </select>
                {this.state.error && <p>{this.state.error}</p>}
                <button onClick={this.submitInput}>Submit</button>
            </div>
        )
    }
}
