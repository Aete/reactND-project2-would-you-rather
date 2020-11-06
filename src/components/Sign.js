import React from 'react';
import { connect } from 'react-redux';
import SignDropDown from './SignDropDown';
import '../css/Sign.css';

function Sign() {
  return (
    <div className="Welcome">
      <img
        src="https://via.placeholder.com/300"
        alt="Welcome Logo Placeholder"
      />
      <h1>Welcome!</h1>
      <h5>Please sign in to continue</h5>
      <SignDropDown />
    </div>
  );
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(Sign);
