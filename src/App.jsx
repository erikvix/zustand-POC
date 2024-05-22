import "./App.css";
import { useUserStore } from "./store";
import { useState } from "react";
import GithubUser from "./components/GithubUser/GithubUser";

function App() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const loading = useUserStore((state) => state.loading);
  const setLoading = useUserStore((state) => state.setLoading);
  const error = useUserStore((state) => state.error);
  const setError = useUserStore((state) => state.setError);
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    if (!e.target.value) {
      setUser(null);
      setError(null);
    }
    setSearch(e.target.value);
  };

  const handleGetUser = () => {
    setLoading(true);
    setUser(search);
    setError(null);
  };
  console.log(error);
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
      <button onClick={handleGetUser} disabled={!search}>
        {loading ? 'Loading...' : 'Search'}
      </button>
      {user ? <GithubUser /> : null}
      {error ? <div className="error">
        <img src="/user-not-found.jpg" alt="error" width={300} height={200} />
        <strong>{error.message}</strong>
      </div> : null}
    </div>
    </>
  );
}

export default App;
