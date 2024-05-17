import React, { useState } from "react";
import "./App.css";
import angle from "./assets/angle.svg"
import Example1 from "./examples/Example1";
import Example2 from "./examples/Example2";
import Example3 from "./examples/Example3";
import Example4 from "./examples/Example4";
import Example5 from "./examples/Example5";
import Example6 from "./examples/Example6";
import Example7 from "./examples/Example7";
import Example8 from "./examples/Example8";
import Example9 from "./examples/Example9";
import Example10 from "./examples/Example10";
import Example11 from "./examples/Example11";

function App() {
  const [currentExample, setCurrentExample] = useState(0);
  const examples = [
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
    Example6,
    Example7,
    Example8,
    Example9,
    Example10,
    Example11,
  ];

  const handlePreviousExample = () => {
    if (currentExample > 0) {
      setCurrentExample(currentExample - 1);
    }
  };

  const handleNextExample = () => {
    if (currentExample < examples.length - 1) {
      setCurrentExample(currentExample + 1);
    }
  };

  const CurrentExample = examples[currentExample];

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-blue-100">
      <div className="absolute top-0 left-0 right-0 flex justify-between">
      <button onClick={handlePreviousExample}><img src={angle} className="h-12 w-12"/></button>
        <p className="flex items-center">Example {currentExample}</p>
      <button onClick={handleNextExample}><img src={angle} className="h-12 w-12 rotate-180"/></button>
      </div>
      <div className="flex justify-center items-center flex-grow">
        <CurrentExample />
      </div>
    </div>
  );
}

export default App;