import { useState } from "react";
import "./App.css";

function App() {
  const [percentage, setPercentage] = useState(100);

  let color ="red";
  if(percentage >= 40) color = "yellow";
  if(percentage >= 80) color = "green";


  const progress_style = {
    transform: `translateX(${percentage - 100}%)`,
    backgroundColor: color
  };

  return (
    <>
      <h1>Progress Bar</h1>
      <div className="progress-bar">
        <div className="progress" style={progress_style}></div>
        <span className="progress-digits">{percentage}%</span>
      </div>
      <button
        onClick={() => setPercentage((prev) => (prev > 0 ? prev - 10 : prev))}
      >
        -10%
      </button>
      <button
        onClick={() => setPercentage((prev) => (prev < 100 ? prev + 10 : prev))}
      >
        +10%
      </button>
    </>
  );
}

export default App;
