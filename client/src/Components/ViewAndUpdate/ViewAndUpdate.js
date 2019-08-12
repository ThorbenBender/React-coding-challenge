import React, { Component } from 'react'

// import Components
import UserScreen from './Components/UserScreen'

export default class ViewAndUpdate extends Component {
    // state to store the current selected user
    state = {
        showUser: ''
    }
    showUser = e => {
        // will set the id of the showuser to event target id
        this.setState({showUser: e.target.id})
    }
    deleteUser = id => {
        // will call the delete function from app.js
        this.props.deleteUser(id)
        // will set the state from the showuser to to an empty string
        this.setState({showUser: ''})
    }
    // will change the view to the create component
    changeView = () => {
        this.props.changeView('Create')
    }
    render() {
        return (
            <div style={{display: 'flex'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <ul style={{listStyleType: 'none'}}>
                        <p onClick={this.changeView}>Create User</p>
                        {this.props.users.map((user, idx) => <li key={idx} id={idx} onClick={this.showUser}>{user.name}</li>)}
                    </ul>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', margin: '0 auto'}}>
                    {/* conditional statement to check if you selected a user */}
                    {this.state.showUser && <UserScreen id={this.state.showUser} user={this.props.users[this.state.showUser]} editUser={this.props.editUser} deleteUser={this.deleteUser}/>}
                    {/* if not it will render this header */}
                    {!this.state.showUser && <h1>No User selected</h1>}
                </div>
            </div>
        )
    }
}
