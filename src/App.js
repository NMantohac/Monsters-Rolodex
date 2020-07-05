import React, { Component } from 'react'
import axios from 'axios';
import './App.css';

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
    const { monsters } = this.state;
    return (
      <div className="App">
        { monsters.map(monster => {
          return <h1 key={monster.id}>{monster.name}</h1>
        }) }
      </div>
    )
  }
}


export default App;
