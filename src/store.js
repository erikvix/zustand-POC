import { create } from "zustand";
import axios from "axios";

const useUserStore = create((set) => ({
  user: {},
  setUser: (user) =>
    user
      ? axios
          .get(`https://api.github.com/users/${user}`)
          .then((res) => set(() => ({ user: res.data, loading: false })))
          .catch(() => set({ user: {}, loading: false }))
      : set({ user: {}, loading: false }),
  loading: false,
  setLoading: (loading) => set({ loading }),
}));

export { useUserStore };
