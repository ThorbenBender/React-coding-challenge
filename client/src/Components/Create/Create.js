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
        // call the changeView function
        this.changeView()
    }
    changeView = () => {
        // change the view to ViewAndUpdate
        this.props.changeView('ViewAndUpdate')
    }
    render() {
        let style = {width: '50%'}
        return (
            <div style={{display: 'flex', flexDirection: 'column', width: '50%',margin: '0 auto', marginTop: '20%'}}>
                {/* input to get the name of the user  */}
                <input name='name' type='text' value={this.state.name} placeholder="Name..." onChange={this.handleInput} style={style}/>
                {/* input to get the email of the user */}
                <input name='email' type='email' value={this.state.email} placeholder="Email..." onChange={this.handleInput} style={style}/>
                {/* dropdown menu to get the gender of the user */}
                <select name='gender' onClick={this.handleInput} style={style}>
                    <option defaultValue='select a gender'>Select a gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>other</option>
                </select>
                {this.state.error && <p>{this.state.error}</p>}
                {/* button to create a new user */}
                <button onClick={this.submitInput} style={style}>Submit</button>
                {/* you can cancel creating a user */}
                {/* will return you to ViewAndUpdate Component */}
                <button onClick={this.changeView} style={style}>Cancel</button>
            </div>
        )
    }
}
