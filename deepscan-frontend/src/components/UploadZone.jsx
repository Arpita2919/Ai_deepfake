import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { analyzeImage } from "../services/api";

const MAX_BYTES = 5 * 1024 * 1024;
const ACCEPTED = {
  "image/jpeg": [],
  "image/png": [],
  "image/webp": [],
};

function UploadZone({ onResult, onError }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState("");

  const onDrop = (acceptedFiles) => {
    const f = acceptedFiles[0];
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setLocalError("");
    onError?.(null);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ACCEPTED,
    maxSize: MAX_BYTES,
    multiple: false,
    onDropRejected: (rejections) => {
      const first = rejections?.[0];
      const code = first?.errors?.[0]?.code;
      const message =
        code === "file-too-large"
          ? "❌ File too large. Max size is 5MB."
          : "❌ Only JPEG, PNG, and WEBP images are allowed.";
      setLocalError(message);
      onError?.(message);
    },
  });

  const handleAnalyze = async () => {
    if (!file) return;

    setLoading(true);
    try {
      const data = await analyzeImage(file);
      onResult(data);
      setLocalError("");
      onError?.(null);
    } catch (e) {
      console.error(e);
      const msg = e?.message || "Analysis failed";
      setLocalError(msg);
      onError?.(msg);
    }
    setLoading(false);
  };

  return (
    <div style={{ border: "2px dashed #aaa", padding: 20, borderRadius: 12 }}>
      <div
        {...getRootProps()}
        style={{ padding: 16, cursor: "pointer", borderRadius: 10 }}
      >
        <input {...getInputProps()} />
        <p style={{ margin: 0, fontWeight: 600 }}>
          Drag & drop an image here, or click to select
        </p>
        <p style={{ margin: "6px 0 0", opacity: 0.8, fontSize: 13 }}>
          Accepted: JPEG/PNG/WEBP • Max size: 5MB
        </p>
      </div>

      {localError && (
        <div style={{ marginTop: 10, color: "#b42318", fontWeight: 600 }}>
          {localError}
        </div>
      )}

      {preview && (
        <img
          src={preview}
          alt="preview"
          style={{ width: 200, marginTop: 10 }}
        />
      )}

      <button
        onClick={handleAnalyze}
        disabled={loading || !file}
        style={{ marginTop: 12, padding: "10px 14px" }}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}

export default UploadZone;