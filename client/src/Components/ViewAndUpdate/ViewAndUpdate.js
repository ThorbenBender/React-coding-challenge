import React, { Component } from 'react'

// import Components
import UserScreen from './Components/UserScreen'

export default class ViewAndUpdate extends Component {
    state = {
        showUser: ''
    }
    showUser = e => {
        this.setState({showUser: e.target.id})
    }
    deleteUser = id => {
        this.props.deleteUser(id)
        this.setState({showUser: ''})
    }
    render() {
        return (
            <div>
                <div>
                    <ul style={{listStyleType: 'none'}}>
                        {this.props.users.map((user, idx) => <li key={idx} id={user.id} onClick={this.showUser}>{user.name}</li>)}
                    </ul>
                </div>
                <div>
                    {this.state.showUser && <UserScreen id={this.state.showUser} users={this.props.users} editUser={this.props.editUser} deleteUser={this.deleteUser}/>}
                </div>
            </div>
        )
    }
}
