"use client";

import { FC, ReactNode, createContext } from "react";

export const ThemeContext = createContext("");

interface ThemeProviderProps {
   children: ReactNode;
   }

export const ThemeProvider:FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value="dark">
      {children}
    </ThemeContext.Provider>
  );
}