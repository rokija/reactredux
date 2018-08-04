import { GET_ACTION } from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case GET_ACTION:
      return [...state, action.payload];
    default:
      return state;
  }
};
