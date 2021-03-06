import React, { useEffect, useContext } from "react";
import Repos from "../repos/Repos";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import GithubContext from "../../context/context/github/github.context";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, user, loading, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;
  return (
    <div>
      <Link to="/" className="btn btn-dark">
        Back to search
      </Link>
      <span className={hireable ? "text-success" : "text-danger"}>
        Hireable:
      </span>
      {hireable ? (
        <i className="fa fa-check-circle-o text-success" />
      ) : (
        <i className="fa  fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt="piture"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <fragment>
                  <strong>Company: </strong> {company}
                </fragment>
              )}
            </li>
            <li>
              {blog && (
                <fragment>
                  <strong>Website: </strong> {blog}
                </fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge ">Followers: {followers}</div>
        <div className="badge badge-success">following: {following}</div>
        <div className="badge badge-light">public_gists: {public_gists}</div>
        <div className="badge ">public_repos: {public_repos}</div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default User;
