// components/Header.tsx
import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

type HeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="px-2 py-4 text-start flex">
      <div>
        <h1 className="text-4xl font-mono font-semibold">Cat-GPT</h1>
        <p className="text-sm">made by COPS, IIT BHU</p>
      </div>
      {/* <button
                className="ml-auto p-2 rounded-lg interactive-bg-primary-container"
                onClick={toggleDarkMode}
            >
                {darkMode ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
            </button> */}
      <button
        className="ml-auto p-4 rounded-lg interactive-bg-primary-container"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <MoonIcon className="h-8 w-8" />
        ) : (
          <SunIcon className="h-8 w-8" />
        )}
      </button>
    </header>
  );
};

export default Header;
