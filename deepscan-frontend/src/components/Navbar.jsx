import React from "react";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.85)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: 800, letterSpacing: 0.2 }}>
            DeepScan
          </span>
          <span style={{ fontSize: 12, opacity: 0.75 }}>
            AI-generated media verifier (light)
          </span>
        </div>
        <span style={{ fontSize: 12, opacity: 0.7 }}>Backend: `:5000`</span>
      </div>
    </header>
  );
}

