import React, { useState } from "react";

const quotes = [
  "Peace comes from within. Do not seek it without.",
  "The mind is everything. What you think you become.",
  "Be where you are, otherwise you will miss your life.",
  "Silence is sometimes the best answer.",
  "Meditation is the discovery that the point of life is always arrived at in the immediate moment."
];

function QuoteCard() {
  const [quote, setQuote] = useState(quotes[0]);

  const newQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="card">
      <p className="quote">“{quote}”</p>
      <button onClick={newQuote}>✨ New Quote</button>
    </div>
  );
}

export default QuoteCard;
