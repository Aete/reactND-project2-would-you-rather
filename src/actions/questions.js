import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { addQuestionToUser, addAnswerToUser } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function addAnswerToQuestion(answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    answer,
  };
}

export function handleAddAnswer(answer, qid) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(addAnswerToQuestion({ authedUser, qid, answer }));
      dispatch(addAnswerToUser({ authedUser, qid, answer }));
    });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((q) => {
      dispatch(addQuestion(q));
      dispatch(addQuestionToUser(q));
    });
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
