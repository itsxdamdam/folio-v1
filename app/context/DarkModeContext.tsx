"use client";

import { createContext, ReactNode, useState } from "react";

type darkModeType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<darkModeType>({
  darkMode: true,
  toggleDarkMode: () => {},
});

type Props = {
  children: ReactNode;
};

function DarkModeProvider({ children }: Props) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    </div>
  );
}

export { DarkModeContext, DarkModeProvider };
