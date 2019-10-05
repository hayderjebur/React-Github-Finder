import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
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
      hireable
    } = this.props.user;
    const { loading } = this.props;
    if (loading) return <Spinner />;
    return (
      <div>
        <Link to="/" className="btn btn-light">
          Back to search
        </Link>
        Hireable:{""}
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
            <a herf={html_url} className="btn btn-dark my-1">
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
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">following: {following}</div>
          <div className="badge badge-danger">public_gists: {public_gists}</div>
          <div className="badge badge-dark">public_repos: {public_repos}</div>
        </div>
      </div>
    );
  }
}

export default User;
