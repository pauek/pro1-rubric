"use client";

import React, { useState } from "react";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";
import TaulaDeTipologies from "./TaulaDeTipologies";
import { alpha, beta, delta, gamma } from "@/lib/params";

export type Grade = {
  C: number;
  S: number;
  L: number;
  E: number;
};

const colors: Record<keyof Grade, string> = {
  C: "bg-blue-500",
  S: "bg-green-600",
  L: "bg-yellow-500",
  E: "bg-red-500",
};

export default function FormulaPlayground() {
  const [state, setState] = useState<Grade>({ C: 0, S: 0, L: 0, E: 0 });

  const grade = ({ C, S, L, E }: Grade) =>
    (alpha * C + beta * S + gamma * L) * (1 - delta + (delta * E) / 10);

  return (
    <>
      <div className="m-auto max-w-[24rem] my-8">
        {Object.entries(state).map(([key, val], i) => (
          <>
            {key === "E" ? (
              <div className="h-0 border-t mt-2 mb-2"></div>
            ) : (
              <></>
            )}
            <Label
              key={i}
              className="flex flex-row gap-5 items-center justify-between"
            >
              <div className="text-lg w-5">{key}</div>
              <Slider
                className="flex-1"
                value={[val]}
                max={10}
                min={0}
                step={0.5}
                color={colors[key as keyof Grade]}
                onValueChange={([newval]: number[]) =>
                  setState((prev) => ({ ...prev, [key]: newval }))
                }
              />
              <div className="w-10 text-right text-lg">{val.toFixed(1)}</div>
            </Label>
          </>
        ))}
        <div className="h-0 border-b border-b-black mt-2 mb-2"></div>
        <div className="font-bold mt-2 text-xl flex flex-row justify-end">
          <span className="font-normal mr-6">Nota</span>
          {grade(state).toFixed(1)}
        </div>
      </div>
      <p>Exemples de tipologies de problemes i les seves notes:</p>
      <div className="flex flex-row justify-center">
        <div>
          <TaulaDeTipologies
            gradeFunc={grade}
            onSelect={(C, S, L, E) => setState({ C, S, L, E })}
          />
        </div>
      </div>
    </>
  );
}
