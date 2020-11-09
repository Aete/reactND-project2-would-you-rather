import React, { Component } from 'react';

import Title from './Title';
import Nav from './Nav';
import Questions from './Questions';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Title />
        <Nav />
        <Questions />
      </div>
    );
  }
}

export default Home;
