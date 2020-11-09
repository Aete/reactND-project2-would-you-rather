import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <span>Home</span>
        <span>New Question</span>
        <span>Leaderboard</span>
        <Link to="/">
          <span>Logout</span>
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(Nav);
