import { create } from "zustand";

const useUserStore = create((set) => ({
  user: { name: "Ahmad Raihan", age: 22 },
  setUser: (newUser) => set({ user: newUser }),
}));

export default useUserStore;
