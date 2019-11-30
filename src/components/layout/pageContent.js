import React, { useContext } from "react";
import GithubContext from "../../context/context/github/github.context";

const PageContent = props => {
  const githubContext = useContext(GithubContext);
  const { isDarkTheme } = githubContext;
  return (
    <div className={isDarkTheme ? "bgdark" : "bglight"}>{props.children}</div>
  );
};

export default PageContent;
