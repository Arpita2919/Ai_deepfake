import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { analyzeImage } from "../services/api";

function UploadZone({ onResult }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const onDrop = (acceptedFiles) => {
    const f = acceptedFiles[0];
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  const handleAnalyze = async () => {
    if (!file) return;

    setLoading(true);
    try {
      const data = await analyzeImage(file);
      onResult(data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div style={{ border: "2px dashed #aaa", padding: 20 }}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag & drop image here, or click</p>
      </div>

      {preview && (
        <img
          src={preview}
          alt="preview"
          style={{ width: 200, marginTop: 10 }}
        />
      )}

      <button onClick={handleAnalyze} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}

export default UploadZone;