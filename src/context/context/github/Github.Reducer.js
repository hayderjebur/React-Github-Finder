import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  TOGGLE_THEME
} from "../../type.context";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        laoding: true
      };

    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };

    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    case TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme
      };
    default:
      return { ...state };
  }
};
