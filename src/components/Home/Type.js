import React from "react";
import Typewriter from "typewriter-effect";
function Type() {
  return (
    <Typewriter
        options={{
          strings: [
            "Web Developer & Designer",
            "Mobile App Developer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 40,
        }}
        />
  );
}

export default Type;
