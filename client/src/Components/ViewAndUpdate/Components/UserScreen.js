import React, { Component } from 'react'

export default class UserScreen extends Component {
    render() {
        return (
            <div>
                <p>{this.props.user.name}</p>
                <p>{this.props.user.email}</p>
                <p>{this.props.user.gender}</p>
            </div>
        )
    }
}
