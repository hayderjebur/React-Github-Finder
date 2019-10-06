import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div className="card-1">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

export default RepoItem;
