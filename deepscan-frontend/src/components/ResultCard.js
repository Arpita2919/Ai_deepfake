import React from "react";
import "./ResultCard.css";

function ResultCard({ result }) {

  const probability = result?.probability || 0;
  const verdict = result?.verdict || "Unknown";

  return (
    <div className="result-container">

      <h2 className="result-title">AI Analysis Result</h2>

      {/* Probability Meter */}
      <div className="meter">
        <div
          className="meter-fill"
          style={{ width: `${probability}%` }}
        ></div>
      </div>

      <p className="probability-text">
        {probability}% — {verdict}
      </p>

      {/* Uploaded Image */}
      {result?.imageUrl && (
        <img
          src={`http://localhost:5000${result.imageUrl}`}
          alt="Uploaded"
          className="preview-image"
        />
      )}

    </div>
  );
}

export default ResultCard;