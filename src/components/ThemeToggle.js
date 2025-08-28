import React from "react";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="toggle-btn"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;

