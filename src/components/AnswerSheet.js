import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { handleAddAnswer } from '../actions/questions';
import { connect } from 'react-redux';

import '../css/Card.css';
import '../css/AnswerSheet.css';

class AnswerSheet extends Component {
  state = {
    toHome: false,
    option: '',
  };

  handleClick = (e, option) => {
    this.setState(() => ({
      option,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { option } = this.state;
    const { dispatch } = this.props;
    if (option !== '') {
      dispatch(handleAddAnswer(option, this.props.question.id));
      this.setState(() => ({
        toHome: true,
      }));
    } else {
      alert('Please choose one option');
    }
  };

  render() {
    const { question, author } = this.props;
    const { toHome } = this.state;
    if (toHome === true) {
      return <Redirect to={`/question/${question.id}`} />;
    }

    return (
      <div className="AnswerSheet">
        <div className="Card">
          <h3>{author.name} asks</h3>
          <div className="Card__main">
            <div className="Card__img">
              <img src={author.avatarURL} alt="Author avartar" />
            </div>
            <div className="Card__text">
              <h5>Would you rather...</h5>
              <div>
                <input
                  type="radio"
                  id="optionOne"
                  name="option"
                  value="optionOne"
                  checked={this.state.option === 'optionOne'}
                  onChange={(e) => this.handleClick(e, e.target.value)}
                />
                <label htmlFor="optionOne"> {question.optionOne.text}</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="optionTwo"
                  name="option"
                  value="optionTwo"
                  checked={this.state.option === 'optionTwo'}
                  onChange={(e) => this.handleClick(e, 'optionTwo')}
                />
                <label htmlFor="optionTwo"> {question.optionTwo.text}</label>
              </div>
            </div>
          </div>
          <button className="Submit-btn" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(AnswerSheet);
