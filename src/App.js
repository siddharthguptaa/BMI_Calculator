import "./App.css";
import React, { useState, useMemo } from "react";

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

function App() {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);

  function onHeightChange(event) {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  }

  function onWeightChange(event) {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  return (
    <>
      <main>
        <h2>BMI Calculator</h2>
        <div className="input-section">
          <p className="slider-output"> Weight : {weight}</p>
          <input
            onChange={onWeightChange}
            type="range"
            className="input-slider"
            min="40"
            max="220"
            step="1"
          ></input>

          <p className="slider-output">Height : {height}</p>
          <input
            onChange={onHeightChange}
            type="range"
            className="input-slider"
            min="150"
            max="400"
          ></input>
        </div>

        <div className="output-section">
          <p>Your BMI is : </p>
          <p className="output">{output}</p>
        </div>
      </main>
    </>
  );
}

export default App;
