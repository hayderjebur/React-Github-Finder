import React, { useState, useContext, useEffect } from "react";
import GithubContext from "../../context/context/github/github.context";
import AlertContext from "../../context/context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { searchUsers, clearUsers, users, isDarkTheme } = githubContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState("");

  useEffect(() => {
    searchUsers("hayder");

    //eslint-disable-next-line
  }, []);

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter name", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Search Users...."
          onChange={onChange}
        />

        <button
          className={
            isDarkTheme ? "navlight btn btn-block" : "navdark btn btn-block"
          }
          type="submit"
        >
          Search
        </button>
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
