"use client"; // Ensures this is treated as a Client Component

import React from "react";
import { ReactTyped } from "react-typed";

const DynamicText = () => {
  return (
    <div className="text-2xl">
      {" "}
      <h1 className="text-yellow-600 font-bold text-5xl">
        Hii...<br></br>
        <h1 className="text-yellow-300 font-bold text-4xl">I am Abhishek</h1>
      </h1>
      {/* Adjust size and spacing as needed */}
      <div className="text-yellow-100">
        <ReactTyped
          strings={[
            "I'm a Software Developer..!",
            "Skilled in JavaScript, React.js and Node.js",
            "Proficient in Next.js and MUI",
            "With Proven Experience of Over a Year",
            "Passionate about creating intuitive UI",
            "Open for Associate and SDE Roles",
            "Let's create something amazing together...",
          ]}
          typeSpeed={50} // Speed at which the text is typed
          backSpeed={20} // Speed at which the text is erased
          backDelay={1500} // Delay before starting to erase
          loop // Keeps typing in a loop
        />
      </div>
    </div>
  );
};

export default DynamicText;
