import React from "react";
import { Link } from "react-router-dom";

const UserItem = props => {
  const { login, avatar_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="person"
        className="round-img"
        style={{ width: "200px" }}
      />
      <h3 className="py-1">{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark p-2 my-1">
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
