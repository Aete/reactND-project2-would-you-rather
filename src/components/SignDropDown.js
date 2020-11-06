import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/SignDropDown.css';

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
              <li key={user.id}>
                <img src={user.avatarURL} />
                <span>{user.name}</span>
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

export default connect(mapStateToProps)(SignDropDown);
