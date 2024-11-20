import { create } from "zustand";

type NavbarState = {
  title: string;
  setTitle: (title: string) => void;
};

const useNavbarStore = create<NavbarState>((set) => ({
  title: "#", // Initial default title
  setTitle: (title: string) => set({ title }), // Function to update the title
}));

export default useNavbarStore;
