import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Loading from './Loading';
import Question from './Question';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Error from './Error';

import '../css/App.css';

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => {
  console.log(authedUser);
  return (
    <Route
      {...rest}
      render={(props) =>
        authedUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location.pathname },
            }}
          />
        )
      }
    />
  );
};

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { users, authedUser } = this.props;
    return (
      <div className="App">
        {Object.keys(users).length > 0 ? (
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute
                path="/add"
                authedUser={authedUser}
                component={NewQuestion}
              />
              <PrivateRoute
                path="/question/:id"
                authedUser={authedUser}
                component={Question}
              />
              <PrivateRoute
                path="/leaderboard"
                authedUser={authedUser}
                component={LeaderBoard}
              />
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

function mapStateToProps({ users, authedUser }) {
  return { users, authedUser };
}

export default connect(mapStateToProps)(App);
