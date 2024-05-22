import "./App.css";
import { useUserStore } from "./store";
import { useState } from "react";
import GithubUser from "./components/GithubUser";
import UserNotFound from "./components/UserNotFound";

function App() {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const loading = useUserStore((state) => state.loading);
  const error = useUserStore((state) => state.error);
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleGetUser = () => {
    setUser(search);
  };
  return (
    <>
    <img src="/zustand.png" alt="zustand" width={400} height={200}/>
    <div className="container">
      <input 
        type="text"
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleGetUser()
         }}
        placeholder="Search for a Github user..."
        value={search} />
      <button onClick={handleGetUser} disabled={!search || loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>
      {user ? <GithubUser /> : null}
      {error ? <UserNotFound /> : null}
    </div>
    </>
  );
}

export default App;
