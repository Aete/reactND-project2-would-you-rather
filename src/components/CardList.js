import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Card from './Card';

import '../css/CardList.css';

class CardList extends Component {
  state = {
    answered: false,
  };
  toggle = (text) => {
    this.setState(() => {
      return {
        answered: text === 'answered' ? true : false,
      };
    });
  };

  render() {
    const { users, questions, authedUser } = this.props;
    if (users[authedUser] === undefined) {
      return <Redirect to={`/`} />;
    }
    const answered = Object.keys(users[authedUser].answers).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );
    const unanswered = Object.keys(questions)
      .filter((q) => {
        return answered.includes(q) === false;
      })
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    return (
      <div className="CardList">
        <div className="CardList__button">
          <button
            style={
              this.state.answered === false
                ? { fontWeight: 700, color: '#000' }
                : { fontWeight: 300, color: '#ccc' }
            }
            onClick={() => {
              this.toggle('unanswered');
            }}
          >
            Unanswered
          </button>
          <button
            style={
              this.state.answered === true
                ? { fontWeight: 700, color: '#000' }
                : { fontWeight: 300, color: '#ccc' }
            }
            onClick={() => {
              this.toggle('answered');
            }}
          >
            Answered
          </button>
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

export default connect(mapStateToProps)(CardList);
