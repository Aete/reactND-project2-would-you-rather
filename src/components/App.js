import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Loading from './Loading';
import Question from './Question';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Error from './Error';

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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/question/:id" component={Question} />
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route component={Error} />
            </Switch>
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
