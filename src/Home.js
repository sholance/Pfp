import React from "react";
import './App.css';

function Home() {
  return (
    <div className="Main">
      <div className="Main__hero">
        <h1 className="texts">
          Human-Centered Design for the Web with{" "}
          <span className="heart" aria-label="love" role="img">
            💙
          </span>{" "}
          is what I do
        </h1>
        <button className="hero__button">What can shola do for me??</button>
      </div>
    </div>
  );
}

export default Home;
