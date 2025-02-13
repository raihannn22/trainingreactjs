import { create } from "zustand";
import { persist } from "zustand/middleware";

const LocalStore = create(
  persist(
    (set) => ({
      user: { name: "", age: 0 },
      setUser: (newUser) => set({ user: newUser }),
      clearUser: () => set({ user: { name: "", age: 0 } }),
    }),
    {
      name: "user-storage", // Key untuk localStorage
    }
  )
);

export default LocalStore;
