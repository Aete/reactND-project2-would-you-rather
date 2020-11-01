import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { _getInitialData } from '../utils/api';

export function handleInitialData() {
  return (dispatch) => {
    return _getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      console.log(questions);
      dispatch(receiveQuestions(questions));
    });
  };
}
