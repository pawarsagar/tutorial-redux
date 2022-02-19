import {ADD_USER, REMOVE_USER} from '../constants';

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}

export function removeUser(id) {
  return {
    type: REMOVE_USER,
    payload: id,
  };
}
