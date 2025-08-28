import React, { useState } from "react";
import Header from "./components/Header";
import QuoteCard from "./components/QuoteCard";
import MoodTracker from "./components/MoodTracker";
import Timer from "./components/Timer";
import ThemeToggle from "./components/ThemeToggle";

import lightBg from "./assets/bg-light.jpg";
import darkBg from "./assets/bg-dark.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`app ${darkMode ? "dark" : ""}`}
      style={{
        backgroundImage: `url(${darkMode ? darkBg : lightBg})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Header />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container">
        <QuoteCard />
        <MoodTracker />
        <Timer />
      </div>
    </div>
  );
}

export default App;
