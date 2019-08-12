import React, { Component } from 'react'

// import Components
import UserScreen from './Components/UserScreen'

export default class ViewAndUpdate extends Component {
    state = {
        showUser: ''
    }
    showUser = e => {
        let user = this.props.users.filter(user => user.id === e.target.id)
        this.setState({showUser: user[0]})
    }
    render() {
        return (
            <div>
                <div>
                    Navbar
                    <ul style={{listStyleType: 'none'}}>
                        {this.props.users.map((user, idx) => <li key={idx} id={user.id} onClick={this.showUser}>{user.name}</li>)}
                    </ul>
                </div>
                <div>
                    {this.state.showUser && <UserScreen user={this.state.showUser}/>}
                </div>
            </div>
        )
    }
}
