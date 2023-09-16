import { types } from "../types";

const initialState = {
  users: [],
};

export default function deleteReducer(state = initialState, action) {
  switch (action.type) {
    case types.DELETE_USER:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }}