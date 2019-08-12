import React, { Component } from 'react'

export default class UserScreen extends Component {
    state = {
        isEditing: false
    }
    componentDidMount() {
        let user = this.props.users.filter(user => user.id === this.props.id);
        this.setState({name: user[0].name, email: user[0].email, gender: user[0].gender})
    }
    editUser = () => {
        this.setState({isEditing: true})
    }
    handleInput = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    saveUser = () => {
        let user = {
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender,
            id: this.props.id
        }
        this.props.editUser(user)
        this.setState({isEditing: false})
    }
    render() {
        return (
            <div>
                {!this.state.isEditing ? <p>{this.state.name}</p> : <input value={this.state.name} name='name' onChange={this.handleInput}/>}
                {!this.state.isEditing ? <p>{this.state.email}</p> : <input value={this.state.email} name='email' onChange={this.handleInput}/>}
                <p>{this.state.gender}</p>
                {!this.state.isEditing ? <button onClick={this.editUser}>Edit</button> : <button onClick={this.saveUser}>Save</button>}
                <button onClick={() => this.props.deleteUser(this.props.id)}>Delete</button>
            </div>
        )
    }
}
