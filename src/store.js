import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  error: null,
  setError: (error) => set({ error }),
  setUser: (user) => {
    set((state) => ({ ...state, loading: true, error: null }));
    user
      ? fetch(`https://api.github.com/users/${user}`)
          .then((res) => {
            if (res.ok) return res.json();
            throw new Error("User not found");
          })
          .then((data) => set(() => ({ user: data, loading: false })))
          .catch((e) => set({ user: null, loading: false, error: e }))
      : set({ user: null, loading: false });
  },
  loading: false,
  setLoading: (loading) => set({ loading }),
}));

export { useUserStore };
