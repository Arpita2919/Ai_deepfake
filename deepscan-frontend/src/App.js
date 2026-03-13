import React, { useState } from "react";
import UploadBox from "./components/UploadBox";
import ResultCard from "./components/ResultCard";
import "./App.css";

function App() {

  const [result, setResult] = useState(null);

  return (
    <div className="container">

      {/* Header */}
      <h1 className="title">DeepScan AI Detector</h1>
      <p className="subtitle">
        Detect AI-generated images using deep learning
      </p>

      {/* Upload Component */}
      <UploadBox setResult={setResult} />

      {/* Show Result */}
      {result && <ResultCard result={result} />}

      {/* Features Section */}
      <div className="features">

        <h3>Features</h3>

        <div className="feature-list">
          <div className="feature">✔ Metadata Analysis</div>
          <div className="feature">✔ GAN Artifact Detection</div>
          <div className="feature">✔ CNN Model Prediction</div>
        </div>

      </div>

    </div>
  );
}

export default App;