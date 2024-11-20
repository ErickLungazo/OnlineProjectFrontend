import { create } from "zustand";

type NavbarState = {
  role: string;
  setRole: (role: string) => void;
};

const useRoleStore = create<NavbarState>((set) => ({
  role: "lecturer", // Initial default role
  setRole: (role: string) => set({ role }), // Function to update the role
}));

export default useRoleStore;
