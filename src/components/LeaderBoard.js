import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from './Nav';
import Score from './Score';

import '../css/LeaderBoard.css';

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;

    const usersSorted = Object.values(users).sort(
      (a, b) =>
        Object.keys(b.answers).length +
        b.questions.length -
        (Object.keys(a.answers).length + a.questions.length)
    );
    return (
      <div className="LeaderBoard">
        <Nav highlight="LeaderBoard" />
        <ul>
          {usersSorted.map((user, index) => {
            return (
              <li key={'score__' + user.id}>
                <Score
                  name={user.name}
                  answerNum={Object.keys(user.answers).length}
                  questionNum={user.questions.length}
                  avatar={user.avatarURL}
                  rank={index + 1}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(LeaderBoard);
