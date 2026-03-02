import React, { useMemo } from "react";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL?.replace(/\/+$/, "") ||
  "http://localhost:5000";

export default function ResultCard({ data }) {
  const uploadUrl = useMemo(() => {
    if (!data?.filename) return null;
    return `${API_BASE_URL}/uploads/${encodeURIComponent(data.filename)}`;
  }, [data?.filename]);

  return (
    <section
      style={{
        marginTop: 16,
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 14,
        padding: 16,
        background: "#fff",
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 6 }}>Result</div>
      <div style={{ opacity: 0.9 }}>{data?.message || "Done"}</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "160px 1fr",
          gap: 8,
          marginTop: 12,
          fontSize: 14,
        }}
      >
        <div style={{ opacity: 0.7 }}>Filename</div>
        <div style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
          {data?.filename || "-"}
        </div>

        <div style={{ opacity: 0.7 }}>MIME type</div>
        <div>{data?.mimetype || "-"}</div>

        <div style={{ opacity: 0.7 }}>Size</div>
        <div>{typeof data?.size === "number" ? `${data.size} bytes` : "-"}</div>
      </div>

      {uploadUrl && (
        <div style={{ marginTop: 12 }}>
          <a href={uploadUrl} target="_blank" rel="noreferrer">
            View uploaded file
          </a>
        </div>
      )}
    </section>
  );
}

