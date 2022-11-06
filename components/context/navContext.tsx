"use client";
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

type NavContextType = {
  isNavOpen: boolean;
  setIsNavOpen: (value: boolean) => void;
};

// Create a custom nav context
export const NavContext = createContext<NavContextType>({
  isNavOpen: false,
  setIsNavOpen: () => {},
});
