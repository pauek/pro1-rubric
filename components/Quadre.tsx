import React from "react";

export default function Quadre({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 border border-yellow-200 shadow-md rounded-lg bg-yellow-50 px-6 py-4">
      {children}
    </div>
  );
}
