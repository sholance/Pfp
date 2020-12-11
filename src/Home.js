import React from "react";
import './App.css';
import Cards from './Cards';
import './Home.css';

function Home() {
  return (
   <div>
    <div className="Main home__main">
      <div className="Main__hero">
        <h1 className="texts hero__text">
          Human-Centered Design for the Web with{" "}
          <span className="heart" aria-label="love" role="img">
            💙
          </span>{" "}
          is what I do
        </h1>
        <button className="hero__button">What can shola do for me??</button>
      </div>
    </div>
    <Cards />
    </div> 
  );
}

export default Home;
