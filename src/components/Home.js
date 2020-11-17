import React, { Component } from 'react';

import '../css/Home.css';
import Nav from './Nav';
import CardList from './CardList';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Nav highlight="Home" />
        <CardList />
      </div>
    );
  }
}

export default Home;
