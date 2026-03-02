import React, { useState } from "react";
import UploadZone from "./components/UploadZone";
import ResultCard from "./components/ResultCard";
import Navbar from "./components/Navbar";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div>
      <Navbar />
      <UploadZone onResult={setResult} />
      {result && <ResultCard data={result} />}
    </div>
  );
}

export default App;