import React from 'react';
import { connect } from 'react-redux';
import SignDropDown from './SignDropDown';
import Title from './Title';
import '../css/Welcome.css';
import '../css/Title.css';

function Welcome() {
  return (
    <div className="Welcome">
      <Title />
      <img
        src="https://via.placeholder.com/300"
        alt="Welcome Logo Placeholder"
      />
      <h1>Sign in</h1>
      <SignDropDown />
    </div>
  );
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(Welcome);
