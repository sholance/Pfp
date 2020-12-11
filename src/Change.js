import React, { useState } from "react";
import "./App.css";

export default function Change({ person, onClick, color, index }) {
  const colors = [
    "#fffffd",
    "#ff3fef",
    "#fff23f",
    "#ff653f",
    "#3fff49",
    "#fff0f5",
    "#3fc2ff",
  ];
  const [bgcolor, setBgcolor] = useState(colors[6]);

  function handleColorChange(e) {
    const bodyElt = document.querySelector("body");
    bodyElt.style.backgroundColor = bgcolor;
    const random_color = colors[Math.floor(Math.random() * colors.length)];

    const newColor = bgcolor === random_color ? colors[0] : random_color;
    setBgcolor(newColor);
  }

  return (
    <>
      <div className="change__wrapper">
        <h1 className="change__button" onClick={handleColorChange}>
          {" "}
          Click
          <br />
          to
          <br />
          Flip
        </h1>
      </div>
    </>
  );
}
