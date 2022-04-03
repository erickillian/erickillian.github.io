import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Electrical Engineer",
          "Embedded Systems Engineer",
          "Software Engineer",
          "Full Stack Web Developer",
          "Blockchain Enthusiast",
          "Rustacean",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
