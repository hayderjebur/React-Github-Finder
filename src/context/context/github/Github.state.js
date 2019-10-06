import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./github.context";
import GithubReducer from "./Github.Reducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from "../../type.context";

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search users
  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  //Get user
  const getUser = async username => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}`);

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  //clear users
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  //Get repos
  const getUserRepos = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  //Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
