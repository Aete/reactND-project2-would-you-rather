import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeAuthedUser } from '../actions/authedUser';
import { Redirect } from 'react-router-dom';

import '../css/Nav.css';

class Nav extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(removeAuthedUser());
  };
  render() {
    const { authedUser, users, highlight } = this.props;
    if (users[authedUser] === undefined) {
      return <Redirect to={`/`} />;
    }
    return (
      <nav className="Nav">
        <ul>
          <li>
            <NavLink
              style={{
                color: highlight === 'Home' ? '#121212' : '#bbb',
              }}
              to={`/`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{
                color: highlight === 'NewQuestion' ? '#121212' : '#bbb',
              }}
              to={`/add`}
            >
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{
                color: highlight === 'LeaderBoard' ? '#121212' : '#bbb',
              }}
              to={`/leaderboard`}
            >
              Leaderboard
            </NavLink>
          </li>
          <li className="Nav__user">
            <img src={users[authedUser].avatarURL} alt="user avatar" />
            <span>Hello! {users[authedUser].name}</span>
          </li>
          <li>
            <NavLink to="/" onClick={(e) => this.handleLogout()}>
              <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return { authedUser, users };
}

export default connect(mapStateToProps)(Nav);
