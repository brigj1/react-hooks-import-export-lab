import React from "react";

import {image} from "../data/user"

const div2 = (
  <div id="card1" className="card">
    hello world
  </div>
);

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
      {div2}
    </div>
  );
}

export default About;