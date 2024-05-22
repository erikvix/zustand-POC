import { create } from "zustand";
import Loading from "./components/Loader/Loading";
import { useEffect } from "react";
import axios from "axios";

const useStore = create((set, get) => ({
  user: {},
  setUser: (user) => set({ user }),
  loading: false,
  setLoading: (loading) => set({ loading }),
}));

function App() {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const setLoading = useStore((state) => state.setLoading);
  const loading = useStore((state) => state.loading);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/mikaelhadler")
      .then((res) => {
        setUser(res.data);
        setLoading(false);
        console.table(res.data);
      })
      .catch((e) => {
        setLoading(false);
        setUser({});
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div>
            <h1>heloo {user.name}</h1>
          </div>
          <div>
            <img src={user.avatar_url} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
