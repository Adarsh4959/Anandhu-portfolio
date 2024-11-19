import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ textAlign: "left", paddingLeft: "-500px" }}>
  <Typewriter
    options={{
      strings: [
        "MBA PROFESSIONAL",
        // "Freelancer",
        // "MERN Stack Developer",
        // "Open Source Contributor",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  />
</div>

  );
}

export default Type;
