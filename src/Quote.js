import React, { useState } from "react";

const Quote = () => {
  const mathQuotes = [
    "Why was the equal sign so humble? Because he knew he wasn't less than or greater than anyone else.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why was the equal sign so humble? Because he knew he wasn't less than or greater than anyone else.",
    "Why was the math book sad? Because it had too many problems.",
    "What’s the best tool to do math? Multipliers.",
    "Why do plants hate math? Because it gives them square roots.",
    "What is a math teacher’s favorite place in NYC? Times Square.",
    "Why did the student do multiplication problems on the floor? The teacher told him not to use tables.",
    "Why do mathematicians love parks? Because of all the natural logs.",
    "Why do they never serve beer at a math party? Because you can’t drink and derive.",
    "Why was the math book sad? Because it had too many problems.",
    "What do you call dudes who love math? Algebros.",
    "Why did the student do multiplication problems on the floor? The teacher told him not to use tables.",
    "Why did the math book look sad? Because it had too many problems.",
    "Why do mathematicians love the beach? Because of the sine and cosine waves.",
    "Why don't math teachers ever argue? They always find a common denominator.",
    "What is a math teacher’s favorite movie? The Sum of All Fears.",
    "Why do mathematicians love the beach? Because of the sine and cosine waves.",
    "How does a mathematician plow fields? With a pro-tractor.",
    "What is a math teacher’s favorite place in NYC? Times Square.",
  ];

  const [quoteIndex, setQuoteIndex] = useState(
    Math.floor(Math.random() * mathQuotes.length)
  );

  const handleShowAnotherQuote = () => {
    const newIndex = Math.floor(Math.random() * mathQuotes.length);
    setQuoteIndex(newIndex);
  };

  return (
    <main
      style={{
        display: "flex",
        minHeight: "90vh",
        flexDirection: "column",
        paddingLeft: "10%",
        paddingRight: "10%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Math Quote of the Day</h2>
      <p>{mathQuotes[quoteIndex]}</p>
      <button
        style={{
          width: "200px",
          height: "50px",
          fontSize: "15px",
          fontWeight: "bold",
          borderRadius: "20px",
          backgroundColor: "rgba(255, 171, 141)",
          cursor: "pointer",
          color: "white",
        }}
        onClick={handleShowAnotherQuote}
      >
        Show Another Quote
      </button>
    </main>
  );
};

export default Quote;
