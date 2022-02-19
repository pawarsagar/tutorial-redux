import {DECREMENT, INCREMENT} from '../constants';

const initialState = {
  countNumber: 0,
};

const countReducer = (state = initialState, action) => {
  console.log(action, '<=== action');

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        countNumber: state.countNumber + 1,
      };
    case DECREMENT:
      return {
        ...state,
        countNumber: state.countNumber - 1,
      };

    default:
      return state;
  }
};
export default countReducer;
