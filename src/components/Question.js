import React from 'react';
import { connect } from 'react-redux';
import AnswerSheet from './AnswerSheet';
import Result from './Result';
import Nav from './Nav';
import { Redirect } from 'react-router-dom';

function Question({ questions, authedUser, users, qid }) {
  if (authedUser === null) {
    alert('Please log in first');
    return <Redirect to="/" />;
  }
  if (questions[qid] === undefined) {
    alert('The question key is unvalid');
    return <Redirect to="/" />;
  }
  const question = questions[qid];
  const author = users[question.author];
  const userAnswered = [
    ...question.optionOne.votes,
    ...question.optionTwo.votes,
  ].includes(authedUser);
  return (
    <div>
      <Nav highlight="None" />
      {userAnswered === false && (
        <AnswerSheet question={question} author={author} />
      )}
      {userAnswered === true && (
        <Result question={question} author={author} authedUser={authedUser} />
      )}
    </div>
  );
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

export default connect(mapStateToProps)(Question);
