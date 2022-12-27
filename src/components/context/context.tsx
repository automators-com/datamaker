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

type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};

// Create a custom theme context
export const ThemeContext = createContext<ThemeContextType>({
  theme: "root",
  setTheme: () => {},
});
