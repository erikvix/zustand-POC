import React from "react";
import { useUserStore } from "../../App";

export default function GithubUser() {
  const user = useUserStore((state) => state.user);

  return (
    <div>
      {user ? (
        <div>
          {user.name ? <h1>{user.name}</h1> : <h1>{user.login}</h1>}
          <div>
            <img src={user.avatar_url} alt={user.login} />
          </div>
          <div>
            <h3>{user.bio}</h3>
            <div>
              <p>Public repositories {user.public_repos}</p>
              <p>{user.followers}</p>
              <p>{user.following}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
