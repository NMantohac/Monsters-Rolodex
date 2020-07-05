import React, { Component } from 'react'
import axios from 'axios';
import { CardList } from '../card-list/card-list.component';
import { SearchBox } from '../search-box/search-box.component';
import './App.styles.css';

class App extends Component {
  state = {
    monsters: [],
    searchField: '',
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
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <SearchBox
          placeholder='Search Monsters'
          handleChange={(event) => this.setState({ searchField: event.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
