import {DECREMENT, INCREMENT} from '../constants';

export function incrementCount(count) {
  return {
    type: INCREMENT, // Mandatory
  };
}

export function decrementCount(user) {
  return {
    type: DECREMENT,
  };
}
