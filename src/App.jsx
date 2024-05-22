import "./App.css";
import { create } from "zustand";
import axios from "axios";
import { useState } from "react";
import GithubUser from "./components/GithubUser/GithubUser";

export const useUserStore = create((set) => ({
  user: {},
  setUser: (user) => set({ user }),
}));

function App() {
  const setUser = useUserStore((state) => state.setUser);
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleGetUser = () => {
    axios
      .get(`https://api.github.com/users/${search}`)
      .then((res) => {
        setUser(res.data);
        console.table(res.data);
      })
      .catch((err) => {
        setUser({});
        console.log(err);
      });
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} value={search} />
      <button onClick={handleGetUser}>Search</button>
      <div>
        <GithubUser />
      </div>
    </div>
  );
}

export default App;
