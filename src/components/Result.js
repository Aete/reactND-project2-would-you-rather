import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Card.css';
import '../css/Result.css';

function Result({ question, author, authedUser }) {
  const chosenOption = question.optionOne.votes.includes(authedUser)
    ? 'optionOne'
    : 'optionTwo';
  const optionOneNum = question.optionOne.votes.length;
  const optionTwoNum = question.optionTwo.votes.length;
  return (
    <div className="Result">
      <div className="Card">
        <h3>{author.name} asks</h3>
        <div className="Card__main">
          <div className="Card__img">
            <img src={author.avatarURL} alt="Author avartar" />
          </div>
          <div className="Card__text Card__result">
            <ul>
              <li
                style={
                  optionOneNum >= optionTwoNum
                    ? { fontWeight: 700 }
                    : { fontWeight: 300 }
                }
              >
                {chosenOption === 'optionOne' && (
                  <div className="Card__result-chosen">
                    <span>Your Vote</span>
                  </div>
                )}
                <span>{`Would you rather ${
                  question.optionOne.text
                } (votes:${optionOneNum}, ${Math.round(
                  (optionOneNum / (optionOneNum + +optionTwoNum + 0.00001)) *
                    100
                )}%)`}</span>
              </li>
              <li
                style={
                  optionOneNum <= optionTwoNum
                    ? { fontWeight: 700 }
                    : { fontWeight: 300 }
                }
              >
                {chosenOption === 'optionTwo' && (
                  <div className="Card__result-chosen">
                    <span>Your Vote</span>
                  </div>
                )}
                <span>
                  {`Would you rather ${
                    question.optionTwo.text
                  } (votes:${optionTwoNum}, ${Math.round(
                    (optionTwoNum / (optionOneNum + optionTwoNum + 0.00001)) *
                      100
                  )}%)`}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link to={`/`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Result;
