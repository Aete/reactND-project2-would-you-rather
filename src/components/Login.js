import React, { Component } from 'react';
import SignDropDown from './SignDropDown';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../css/Welcome.css';
import '../css/Title.css';

class Login extends Component {
  render() {
    const from = this.props.location.state.from || '/';
    const { authedUser } = this.props;

    if (authedUser) {
      return <Redirect to={from} />;
    }
    return (
      <div className="Welcome">
        <div className="Title">
          <h3>Welcome to the Would You Rather App!</h3>
        </div>
        <h3>{`Please Sign in first to view page '${from}'`}</h3>
        <SignDropDown />
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}
export default connect(mapStateToProps)(Login);
