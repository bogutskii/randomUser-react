import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      person: {}
    }
  }

  loadNewUser() {
    axios.get('https://randomuser.me/api/')
      .then(result => this.setState({person: result.data.results[0]}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <button onClick={() => this.loadNewUser()}> Load new user</button>

        {

          this.state.person.name &&
          <div>
            <img src = {this.state.person.picture.large} alt="something wrong"/>
            {this.state.person.name.first}{' '}
            {this.state.person.name.last} {'\n'}
          </div>
          }


      </div>
    );
  }
}

export default App;
