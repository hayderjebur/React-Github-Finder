import React, { useState, useContext } from "react";
import GithubContext from "../../context/context/github/github.context";

const Search = ({ clearUsers, showClear, setAlert }) => {
  const githubContext = useContext(GithubContext);
  const { searchUsers } = githubContext;

  const [text, setText] = useState("");

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
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
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
