import React, { Component, Fragment } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';

import Title from './Title';
import Sign from './Sign';
import Loading from './Loading';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { users } = this.props;
    console.log('users');
    return (
      <div className="App">
        <Title />
        {Object.keys(users).length > 0 ? <Sign /> : <Loading />}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(App);
