import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from './Nav';

import '../css/Card.css';
import '../css/Result.css';

class Result extends Component {
  render() {
    const { questions, qid, users, authedUser } = this.props;
    const question = questions[qid];
    if (question === undefined) {
      return <Redirect to={`/`} />;
    }
    const author = users[question.author];
    const optionOneNum = question.optionOne.votes.length;
    const optionTwoNum = question.optionTwo.votes.length;
    return (
      <div className="Result">
        <Nav highlight="None" />
        <div className="Card">
          <h3>{author.name} asks</h3>
          <div className="Card__main">
            <div className="Card__img">
              <img src={author.avatarURL} alt="Author avartar" />
            </div>
            <div className="Card__text">
              <h5>Would you rather...</h5>
              <ul>
                <li
                  style={
                    optionOneNum > optionTwoNum
                      ? { fontWeight: 700 }
                      : { fontWeight: 300 }
                  }
                >{`${question.optionOne.text} (votes:${optionOneNum})`}</li>
                <li
                  style={
                    optionOneNum < optionTwoNum
                      ? { fontWeight: 700 }
                      : { fontWeight: 300 }
                  }
                >{`${question.optionTwo.text} (votes:${optionTwoNum})`}</li>
              </ul>
            </div>
          </div>
        </div>
        <Link to={`/user/${authedUser}`}>
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params;
  return {
    qid: id,
    questions,
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(Result);
