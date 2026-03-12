"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        background: "#0066FF",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: 4,
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
        fontFamily: "inherit",
        zIndex: 999,
        boxShadow: "0 2px 8px rgba(0,102,255,0.4)",
      }}
    >
      ↓ Save as PDF
    </button>
  );
}
