import React, { Component } from 'react'
import axios from 'axios';
import { CardList } from '../card-list/card-list.component';
import './App.styles.css';

class App extends Component {
  state = {
    monsters: []
  }

  async componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => this.setState({ monsters: users }));

    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      this.setState({ monsters: data });
    } catch (e) {
      if (e) throw e;
    }
  }

  render() {
    // const { monsters } = this.state;
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}


export default App;
