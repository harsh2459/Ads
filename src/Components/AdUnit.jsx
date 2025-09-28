// src/Components/AdUnit.jsx
import { useEffect } from "react";

export default function AdUnit({ slot, format = "auto", style }) {
  useEffect(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
  }, []); // push once per mount

  return (
    <ins className="adsbygoogle"
         style={{ display: "block", minHeight: 280, margin: "1rem 0", ...(style || {}) }}
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"  // your publisher ID
         data-ad-slot={slot}                       // your real ad slot ID
         data-ad-format={format}
         data-full-width-responsive="true" />
  );
}
