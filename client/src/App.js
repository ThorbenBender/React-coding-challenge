import React, {Component} from 'react';

// Created Components
import Create from './Components/Create/Create'

import ViewAndUpdate from './Components/ViewAndUpdate/ViewAndUpdate'

class App extends Component {
  // State
  state = {
    // show the current component
    view: 'Create',
    user: []
  }

  changeView = view => {
    // will set the state of view based on the view argument
    this.setState({view: view})
  }
  // takes in a user as an argument
  createUser = user => {
    // it will create a new array and fill in every user from the previous state and add the new user to the end
    this.setState(st => ({user: [...st.user, user]}))
  }
  render() {
    return (
      <div className="App">
        {/* If view is equal to Create it will render the create component */}
        {this.state.view === 'Create' && <Create changeView={this.changeView} createUser={this.createUser} />}
        {/* If view is equal to ViewAndUpdate it will render the ViewAndUpdate component */}
        {this.state.view === 'ViewAndUpdate' && <ViewAndUpdate changeView={this.changeView}/>}
      </div>
    );
  }
}

export default App;
