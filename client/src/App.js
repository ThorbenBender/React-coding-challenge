import React, {Component} from 'react';

// Created Components
import Create from './Components/Create/Create'

import ViewAndUpdate from './Components/ViewAndUpdate/ViewAndUpdate'

class App extends Component {
  state = {
    view: 'Create'
  }

  changeView = view => {
    this.setState({view: view})
  }
  render() {
    return (
      <div className="App">
        {this.state.view === 'Create' && <Create changeView={this.changeView}/>}
        {this.state.view === 'ViewAndUpdate' && <ViewAndUpdate changeView={this.changeView}/>}
      </div>
    );
  }
}

export default App;
