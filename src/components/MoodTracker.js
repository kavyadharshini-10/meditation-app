import React, { useState } from "react";

function MoodTracker() {
  const moods = ["😊 Happy", "😐 Calm", "😢 Sad", "😡 Stressed"];
  const [mood, setMood] = useState(null);

  return (
    <div className="card">
      <h2>How do you feel today?</h2>
      <div className="mood-buttons">
        {moods.map((m, i) => (
          <button key={i} onClick={() => setMood(m)}>
            {m}
          </button>
        ))}
      </div>
      {mood && <p className="selected">You are feeling: {mood}</p>}
    </div>
  );
}

export default MoodTracker;
