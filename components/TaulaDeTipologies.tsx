import React from "react";
import { Grade, tipologies } from "@/lib/params";

const TDNota = ({ nota }: { nota: number }) => (
  <td className="text-center italic text-sm">
    {nota === 0 ? <span className="text-gray-300">0</span> : nota}
  </td>
);

type TaulaDeTipologiesProps = {
  gradeFunc: (grade: Grade) => number;
  onSelect: (C: number, S: number, L: number, E: number) => void;
};
export default function TaulaDeTipologies({
  onSelect,
  gradeFunc,
}: TaulaDeTipologiesProps) {
  const sortedTipologies = tipologies.map(
    ([C, S, L, E, Desc]): [number, number, number, number, string, number] => [
      C,
      S,
      L,
      E,
      Desc,
      gradeFunc({ C, S, L, E }),
    ]
  );

  sortedTipologies.sort((a, b) => {
    const v = b[5] - a[5];
    return v !== 0.0 ? v : b[4].localeCompare(a[4]);
  });

  return (
    <table className="text-sm border border-black">
      <thead>
        <tr className="font-bold border-b border-b-black">
          <td className="text-center w-8 text-blue-500">C</td>
          <td className="text-center w-8 text-green-600">S</td>
          <td className="text-center w-8 text-yellow-600">L</td>
          <td className="text-center w-8 text-red-500">E</td>
          <td className="text-center">Nota</td>
          <td>Descripció</td>
        </tr>
      </thead>
      <tbody>
        {sortedTipologies.map(([C, S, L, E, Desc], i) => (
          <tr
            key={i}
            onClick={() => onSelect(C, S, L, E)}
            className="hover:bg-gray-200 cursor-pointer"
          >
            <TDNota nota={C} />
            <TDNota nota={S} />
            <TDNota nota={L} />
            <TDNota nota={E} />
            <td className="text-center font-bold border-x border-x-black">
              {gradeFunc({ C, S, L, E }).toFixed(1)}
            </td>
            <td className={Desc.endsWith("*") ? "font-bold" : ""}>
              {Desc.replace("*", "")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
