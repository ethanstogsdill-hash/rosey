"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-all duration-600 ${
        hidden ? "opacity-0 invisible pointer-events-none" : ""
      }`}
    >
      <div className="text-center">
        <div className="font-heading text-2xl font-bold tracking-wider text-foreground mb-6">
          AJ23 <span className="text-gold">BARBERSHOP</span>
        </div>
        <div className="w-[120px] h-[2px] bg-[rgba(255,255,255,0.1)] rounded-sm mx-auto overflow-hidden">
          <div className="h-full bg-gold rounded-sm animate-[loader-fill_1.2s_ease_forwards]" />
        </div>
      </div>
    </div>
  );
}
