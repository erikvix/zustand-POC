import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {},
  setUser: (user) =>
    user
      ? fetch(`https://api.github.com/users/${user}`)
          .then((res) => res.json())
          .then((data) => set(() => ({ user: data, loading: false })))
          .catch(() => set({ user: {}, loading: false }))
      : set({ user: {}, loading: false }),
  loading: false,
  setLoading: (loading) => set({ loading }),
}));

export { useUserStore };
