import { useEffect } from "react";

export default function AdUnit({ slot, format = "auto", style }) {
  useEffect(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: "block", minHeight: 280, margin: "1rem 0", ...(style || {}) }}
         data-ad-client="ca-pub-3826175776841653"
         data-ad-slot={slot}
         data-ad-format={format}
         data-full-width-responsive="true" />
  );
}
