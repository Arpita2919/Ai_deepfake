import React, { useState } from "react";
import UploadZone from "./components/UploadZone";
import ResultCard from "./components/ResultCard";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div>
      <Navbar />
      <main className="container">
        <div className="title">Upload an image for verification</div>
        <div className="subtitle">
          Sends your image to the backend endpoint <code>/api/analyze</code> as{" "}
          <code>multipart/form-data</code> field <code>image</code>.
        </div>

        <UploadZone
          onResult={(data) => {
            setResult(data);
            setError(null);
          }}
          onError={(msg) => {
            setError(msg);
          }}
        />

        {error && <div className="errorBanner">{error}</div>}
        {result && <ResultCard data={result} />}
      </main>
    </div>
  );
}

export default App;