"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// The 3D scene requires window/browser APIs, so we disable SSR
const PortfolioApp = dynamic(() => import("../App.jsx"), {
  ssr: false,
});

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <PortfolioApp />;
}
