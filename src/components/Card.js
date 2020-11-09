import React from 'react';

import '../css/Card.css';

export default function Card({ author, question, answer }) {
  const button = answer === 'unanswered' ? 'Your answer' : 'Change the answer';
  return (
    <div className="Card">
      <div>
        <img src={author.avatarURL} alt="Author avartar" />
        <div className="Card__text">
          <p>{author.name} asked</p>
          <p
            style={
              answer === 'optionOne' ? { fontWeight: 700 } : { fontWeight: 300 }
            }
          >
            {question.optionOne.text}
          </p>
          <p
            style={
              answer === 'optionTwo' ? { fontWeight: 700 } : { fontWeight: 300 }
            }
          >
            {question.optionTwo.text}
          </p>
        </div>
      </div>
      <button>{button}</button>
    </div>
  );
}
