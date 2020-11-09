import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Welcome from './Welcome';
import Home from './Home';
import Loading from './Loading';

import '../css/App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { users } = this.props;
    return (
      <div className="App">
        {Object.keys(users).length > 0 ? (
          <Router>
            <Route exact path="/" component={Welcome} />
            <Route path="/question/:id" component={Home} />
          </Router>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(App);
