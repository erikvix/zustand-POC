import { useUserStore } from "../../store";
import './GithubUser.css'
export default function GithubUser() {
  const {name, login, avatar_url, bio, public_repos, followers, following} = useUserStore((state) => state.user);

  return (
    <div className="user-profile">
      <div className="user-profile__img">
        <img src={avatar_url} alt={login} />
      </div>
      <div className="user-profile__title">
        <h2>{name}</h2>
        <h4>{bio}</h4>
        <p>@{login}</p>
      </div>  
      <div className="user-profile__details">
        <div>
          <strong>Public repositories</strong>: {public_repos}
        </div>
        <div>
          <strong>Followers</strong>: {followers}
        </div>
        <div>
          <strong>Following</strong>: {following}
        </div>
      </div>
    </div>
  );
}
