import React, { Component } from 'react'

export default class UserScreen extends Component {
    state = {
        isEditing: false
    }
    editUser = () => {
        // set state
        // we need to pass in the user information to change them in the input field
        this.setState({isEditing: true, name: this.props.user.name, email: this.props.user.email,gender: this.props.user.gender})
    }
    handleInput = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    saveUser = () => {
        // create an user object
        let user = {
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender,
            id: this.props.user.id
        }
        // will call the edit function from app.js
        this.props.editUser(user)
        // set the state from isEditing to false
        this.setState({isEditing: false})
    }
    render() {
        return (
            <div>
                {/* will check if editing is false. if it is false it will render a paragraph otherwise it will render a input field */}
                {!this.state.isEditing ? <p>{this.props.user.name}</p> : <input value={this.state.name} name='name' onChange={this.handleInput}/>}
                {/* will check if editing is false. if it is false it will render a paragraph otherwise it will render a input field */}
                {!this.state.isEditing ? <p>{this.props.user.email}</p> : <input value={this.state.email} name='email' onChange={this.handleInput}/>}
                <p>{this.props.user.gender}</p>
                {/* will check if editing is false. if it is false it will render a button with edit function otherwise it will render a button with the save function */}
                {!this.state.isEditing ? <button onClick={this.editUser}>Edit</button> : <button onClick={this.saveUser}>Save</button>}
                {/* will call the delete function from viewandupdate */}
                <button onClick={() => this.props.deleteUser(this.props.user.id)}>Delete</button>
            </div>
        )
    }
}
