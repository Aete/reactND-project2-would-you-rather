import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Welcome from './Welcome';
import Home from './Home';
import Loading from './Loading';
import Question from './Question';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import AnswerSheet from './AnswerSheet';
import Result from './Result';
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
              <Route exact path="/" component={Welcome} />
              <Route exact path="/user/:id" component={Home} />
              <Route exact path="/question/:id" component={Question} />
              <Route exact path="/add" component={NewQuestion} />
              <Route
                exact
                path="/question/:id/answer"
                component={AnswerSheet}
              />
              <Route exact path="/question/:id/result" component={Result} />
              <Route exact path="/leaderboard" component={LeaderBoard} />
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
