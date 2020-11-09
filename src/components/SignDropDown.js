import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/SignDropDown.css';
import { setAuthedUser } from '../actions/authedUser';
import { Link, withRouter } from 'react-router-dom';

class SignDropDown extends Component {
  state = {
    select: false,
  };

  handleClick(e) {
    e.preventDefault();
    const { select } = this.state;
    this.setState(() => ({
      select: select === true ? false : true,
    }));
  }

  handleAuthUser(e, id) {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(id));
    this.props.history.push(`/question/${id}`);
  }

  render() {
    const { users } = this.props;
    const { select } = this.state;
    return (
      <div className="SignDropDown">
        <div className="LoginButton" onClick={(e) => this.handleClick(e)}>
          <span>Select a user (Click)</span>
        </div>
        {select === true && (
          <ul className="SignDropDown_menu">
            {Object.values(users).map((user) => (
              <li
                key={user.id}
                onClick={(e) => this.handleAuthUser(e, user.id)}
              >
                <Link to={`/question/${user.id}`}>
                  <img src={user.avatarURL} alt="avatar" />
                  <span>{user.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default withRouter(connect(mapStateToProps)(SignDropDown));
