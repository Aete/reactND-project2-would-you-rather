import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../css/Home.css';
import Nav from './Nav';
import CardList from './CardList';
import Welcome from './Welcome';

class Home extends Component {
  render() {
    const { authedUser } = this.props;
    return (
      <div className="Home">
        <Nav highlight="Home" />
        {authedUser === null && <Welcome />}
        {authedUser !== null && <CardList />}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Home);
