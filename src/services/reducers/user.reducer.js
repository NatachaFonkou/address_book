import { GET_USER_BY_ID, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../actions/user.action";
import { REGISTER_FAIL, REGISTER_SUCCESS } from "../actions/user.action";

const initialState = {
  user: [],
  error: null,
  isAuthenticated: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case REGISTER_FAIL:
      return {
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case LOGIN_FAIL:
      return {
        error: action.payload,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
      };
    case GET_USER_BY_ID:
      return {
        user: action.payload,
        isAuthenticated: true,
        error: null,
      }
    default:
      return state;
  }
}

