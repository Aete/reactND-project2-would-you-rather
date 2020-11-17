import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';
import Nav from './Nav';

import '../css/NewQuestion.css';

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
  };

  handleChangeOptionOne = (e) => {
    const text = e.target.value;
    this.setState(() => ({
      optionOne: text,
    }));
  };

  handleChangeOptionTwo = (e) => {
    const text = e.target.value;
    this.setState(() => ({
      optionTwo: text,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;
    dispatch(handleAddQuestion(optionOne, optionTwo));
    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true,
    }));
  };

  render() {
    const { authedUser, users } = this.props;
    const { toHome } = this.state;
    if (toHome === true) {
      return <Redirect to={`/user/${authedUser}`} />;
    }
    return (
      <div className="NewQuestion">
        <Nav highlight="NewQuestion" />
        <div className="NewQuestion__card">
          <div>
            <h2>Complete your question</h2>
          </div>
          <div className="NewQuestion__main">
            <img src={users[authedUser].avatarURL} alt="avatar" />
            <div className="NewQuestion__text">
              <h3>Would you rather...</h3>
              <input
                required
                type="text"
                placeholder="Write an option"
                onChange={this.handleChangeOptionOne}
              />
              <p>or</p>
              <input
                required
                type="text"
                placeholder="Write an option"
                onChange={this.handleChangeOptionTwo}
              />
            </div>
          </div>
          <button onClick={this.handleSubmit}>Summit</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questions,
  };
}

export default connect(mapStateToProps)(NewQuestion);
