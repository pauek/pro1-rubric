import React, { useState } from "react";

type Grade = {
  C: number;
  S: number;
  L: number;
  E: number;
};

export default function FormulaPlayground() {
  const [state, setState] = useState<Grade>({ C: 0, S: 0, L: 0, E: 0 });

  return <div>
    
  </div>;
}
