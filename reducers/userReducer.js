import {ADD_USER, REMOVE_USER} from '../constants';

const initialState = {
  userRecords: [],
};

const userReducer = (state = initialState, action) => {
  console.log(`action`, action);
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userRecords: [...state.userRecords, action.payload],
      };
    case REMOVE_USER:
      return {
        ...state,
        userRecords: state.userRecords.filter(
          (userRecords) => userRecords.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
export default userReducer;
