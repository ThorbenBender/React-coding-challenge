import React, {Component} from 'react';

// Created Components
import Create from './Components/Create/Create'

import ViewAndUpdate from './Components/ViewAndUpdate/ViewAndUpdate'

class App extends Component {
  // State
  state = {
    // show the current component
    view: 'Create',
    users: []
  }

  changeView = view => {
    // will set the state of view based on the view argument
    this.setState({view: view})
  }
  // takes in a user as an argument
  createUser = user => {
    // it will create a new array and fill in every user from the previous state and add the new user to the end
    this.setState(st => ({users: [...st.users, user]}))
  }
  editUser = (user) => {
    // creates a new array 
    let newUsers = this.state.users.map(u => {
      // changes the user with the same id as the id of the user we pass in
      if (u.id === user.id) {
        // set u to user
        u = user
      }
      // pass in the user in the new array
      return u
    })
    // set the state to the new array
    this.setState({users: newUsers})
  }

  deleteUser = id => {
    // pass only the users in the array who don't have the same id as the user we pass in
    let newUsers = this.state.users.filter(user => user.id !== id)
    // assign the new array to users
    this.setState({users: newUsers})
  }
  render() {
    return (
      <div className="App">
        {/* If view is equal to Create it will render the create component */}
        {this.state.view === 'Create' && <Create changeView={this.changeView} createUser={this.createUser} />}
        {/* If view is equal to ViewAndUpdate it will render the ViewAndUpdate component */}
        {this.state.view === 'ViewAndUpdate' && <ViewAndUpdate changeView={this.changeView} users={this.state.users} editUser={this.editUser} deleteUser={this.deleteUser}/>}
      </div>
    );
  }
}

export default App;
