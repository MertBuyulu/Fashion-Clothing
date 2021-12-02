import { UserActionTypes } from "./user.types";

// initialize user state
const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    // if any of the action types does not match return the state
    default:
      return state;
  }
};

export default userReducer;
