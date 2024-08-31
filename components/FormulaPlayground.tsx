"use client";

import { alpha, beta, backgroundColors, delta, gamma, Grade } from "@/lib/params";
import { useState } from "react";
import TaulaDeTipologies from "./TaulaDeTipologies";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";


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
                color={backgroundColors[key as keyof Grade]}
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
      <h2>Classes de problemes i la seva nota</h2>
      <p>
        Aquesta taula mostra problemes en abstracte però fent la hipòtesi que
        tenen unes característiques que trobem amb freqüència o bé són exemples
        límit, exagerant un aspecte fins a l&apos;extrem. Els exemples es poden
        clicar i recuperar la nota que tenen al <em>Playground</em> d&apos;aquí
        a sobre.
      </p>
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
