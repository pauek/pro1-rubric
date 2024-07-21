import React from "react";

export default function Quadre({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-yellow-200 shadow-md rounded-lg bg-yellow-50 px-5 py-0">
      {children}
    </div>
  );
}
