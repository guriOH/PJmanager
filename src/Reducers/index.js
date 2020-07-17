import { CREATE_PROJECT, LOGIN } from "../Actions";

import { combineReducers } from "redux";

const initialState = {
  projects: [],
};

function projectReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PROJECT:
      return Object.assign({}, state, {
        projects: [
          ...state.projects,
          {
            project: action.project,
          },
        ],
      });
    default:
      return state;
  }
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        user: {
            user_id : action.user.user_id,
            password : action.user.password,
        }
      });
    default:
      return state;
  }
}

export default combineReducers({
  projects: projectReducer,
  user: userReducer
});
