"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "rgba(18, 16, 14, 0.97)",
        borderTop: "1px solid rgba(185, 137, 71, 0.3)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm" style={{ color: "var(--text)" }}>
            Ova stranica koristi nužne kolačiće za ispravno funkcioniranje.{" "}
            <Link
              href="/politika-privatnosti"
              className="underline hover-gold transition-colors"
              style={{ color: "var(--gold)" }}
            >
              Politika privatnosti
            </Link>
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Ne koristimo analitiku ni reklamne kolačiće trećih strana.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-xs px-4 py-2 rounded transition-colors"
            style={{
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Odbijam
          </button>
          <button
            onClick={accept}
            className="text-xs px-5 py-2 rounded font-semibold transition-all"
            style={{
              background: "var(--gold)",
              color: "#0e0e0e",
              cursor: "pointer",
              border: "none",
            }}
          >
            Prihvaćam
          </button>
        </div>
      </div>
    </div>
  );
}
