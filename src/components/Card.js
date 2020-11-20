import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Card.css';

export default function Card({ author, question, answer }) {
  return (
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
                answer === 'optionOne'
                  ? { fontWeight: 700 }
                  : { fontWeight: 300 }
              }
            >
              {question.optionOne.text}
            </li>
            <li style={{ fontWeight: 300 }}>or</li>
            <li
              style={
                answer === 'optionTwo'
                  ? { fontWeight: 700 }
                  : { fontWeight: 300 }
              }
            >
              {question.optionTwo.text + '?'}
            </li>
          </ul>
        </div>
      </div>
      {answer === 'unanswered' && (
        <Link to={`/question/${question.id}`}>
          <button>Answer</button>
        </Link>
      )}
      {answer !== 'unanswered' && (
        <Link to={`/question/${question.id}`}>
          <button>Result</button>
        </Link>
      )}
    </div>
  );
}
