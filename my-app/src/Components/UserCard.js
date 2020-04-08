import React from "react";

function UserCard({ user }) {
  return (
    <div className="userCard">
      <img src={user.avatar_url} alt="Github profile avatar" />
      <h3>{user.name || user.login}</h3>
      <p>{user.location}</p>
      <p>{user.bio}</p>
    </div>
  );
}

export default UserCard;
