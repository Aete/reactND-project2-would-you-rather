import React from 'react';

import '../css/Score.css';

function Score({ name, avatar, answerNum, questionNum, rank }) {
  return (
    <div className="Score">
      <img src={avatar} alt="avatar" />
      <div className="Score__text">
        <h3>{name}</h3>
        <ul>
          <li>Answered Questions: {answerNum}</li>
          <li>Created Questions: {questionNum}</li>
          <li>Total Score: {answerNum + questionNum}</li>
        </ul>
      </div>
      <div className="Rank">#{rank}</div>
    </div>
  );
}

export default Score;
