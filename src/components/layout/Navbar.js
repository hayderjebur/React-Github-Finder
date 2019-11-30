import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../../context/context/github/github.context";

const Navbar = ({ icon, title }) => {
  const githubContext = useContext(GithubContext);
  const { toggleTheme, isDarkTheme } = githubContext;

  return (
    <div className={isDarkTheme ? "navlight" : "navdark"}>
      <nav className="navbar ">
        <h1 className={isDarkTheme ? "navlight" : "navdark"}>
          <i className={icon} /> {title}
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <label class="switch">
          <input type="checkbox" onChange={toggleTheme} />
          <span class="slider round"></span>
        </label>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fa fa-github"
};

export default Navbar;
