"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Catch-all route so deep links like /about, /gallery, /studio, /contact
// (virtual routes pushed via the History API in useDocumentMeta.js) render
// the same 3D app instead of 404ing on a hard refresh or direct visit.
const PortfolioApp = dynamic(() => import("../../App.jsx"), {
  ssr: false,
});

export default function CatchAll() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <PortfolioApp />;
}
