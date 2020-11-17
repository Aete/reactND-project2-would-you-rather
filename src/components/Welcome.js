import React from 'react';
import { connect } from 'react-redux';
import SignDropDown from './SignDropDown';
import '../css/Welcome.css';
import '../css/Title.css';

function Welcome() {
  return (
    <div className="Welcome">
      <div className="Title">
        <h3>Welcome to the Would You Rather App!</h3>
      </div>
      <h1>Would you rather?</h1>
      <h3>Sign in</h3>
      <SignDropDown />
    </div>
  );
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(Welcome);
