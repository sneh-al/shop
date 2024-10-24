const { create } = require("zustand");
import { persist } from "zustand/middleware";

const useUser = create(
  persist((Set) => ({
    user: null,
    setUser: (user) => Set(() => ({ user })),
    logout: () => Set(() => ({ user: null })),
  }))
);

export default useUser;
