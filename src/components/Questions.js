import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card';

import '../css/Question.css';

class Questions extends Component {
  state = {
    answered: true,
  };
  toggle = () => {
    this.setState(() => {
      return {
        answered: !this.state.answered,
      };
    });
  };

  render() {
    const { users, questions, authedUser } = this.props;
    const answered = Object.keys(users[authedUser].answers);
    const unanswered = Object.keys(questions).filter((q) => {
      return answered.includes(q) === false;
    });
    return (
      <div className="Question">
        <div>
          <button onClick={this.toggle}>Answered</button>
          <button onClick={this.toggle}>Unanswered</button>
        </div>
        <ul>
          {this.state.answered === true &&
            answered.map((q) => {
              const question = questions[q];
              const author = users[question.author];
              return (
                <li key={`card_${q}`}>
                  <Card
                    question={question}
                    author={author}
                    answer={users[authedUser].answers[q]}
                  />
                </li>
              );
            })}
          {this.state.answered === false &&
            unanswered.map((q) => {
              const question = questions[q];
              const author = users[question.author];
              return (
                <li key={`card_${q}`}>
                  <Card
                    question={question}
                    author={author}
                    answer="unanswered"
                  />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return { users, questions, authedUser };
}

export default connect(mapStateToProps)(Questions);
