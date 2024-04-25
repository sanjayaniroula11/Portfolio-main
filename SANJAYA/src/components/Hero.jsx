import React from "react";
import MyWorks from "./MyWorks";

function Hero() {
  return (
    <div className="hero-section">
      <div className="big-text">
        <div className="hero-text">
          <h1 className="font-black text-5xl heading1">I'M GLAD</h1>
          <h1 className="font-black text-5xl heading1">YOU'VE COME THIS FAR</h1>
        </div>

        <h3 className="font-bold my-name">I'M SANJAYA NIROULA </h3>
        <h3 className="font-bold frontend-text">FRONTEND DEVELOPER</h3>
      </div>
      <div className="project-section psec1">
        <div className="project">
          {" "}
          <MyWorks />{" "}
        </div>
        <div className="project">
          {" "}
          <MyWorks />{" "}
        </div>
      </div>
      <div className="project-section psec2">
        <div className="project">
          {" "}
          <MyWorks />{" "}
        </div>
      </div>
    </div>
  );
}

export default Hero;