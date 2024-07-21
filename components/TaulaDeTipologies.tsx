import React from "react";

const tipologies: [number, number, number, number, number, string][] = [
  [10, 10, 10, 10, 10, "Perfecte"],
  [10, 5, 10, 10, 9, "Falta simplicitat"],
  [10, 10, 5, 10, 9, "Falta llegibilitat"],
  [10, 10, 0, 10, 8, "Bé però difícil de llegir"],
  [10, 10, 10, 5, 8, "Falta eficiència"],
  [10, 0, 10, 10, 7, "Bé però enrevessat"],
  [10, 10, 5, 5, 7, "Correcte + simple. La resta a mitges"],
  [10, 5, 5, 5, 6, "Correcte. La resta a mitges"],
  [10, 0, 0, 10, 5, "Mínimo siendo correcte y eficiente*"],
  [10, 10, 10, 0, 5, "Máximo siendo ineficiente*"],
  [0, 10, 10, 10, 5, "Máximo siendo incorrecte*"],
  [10, 5, 0, 5, 5, "Aprova (1)"],
  [5, 10, 5, 5, 5, "Aprova (2)"],
  [10, 0, 8, 5, 5, "Aprova (3)"],
  [10, 0, 10, 0, 4, "Enrevessat + ineficient"],
  [10, 10, 0, 0, 4, "Només correcte + simple"],
  [10, 0, 0, 0, 3, "Només correcte*"],
  [0, 10, 0, 10, 3, "Només simple + eficiente"],
  [0, 0, 10, 10, 2, "Només llegible + eficiente"],
  [0, 10, 0, 0, 2, "Només simple"],
  [0, 0, 10, 0, 1, "Només llegible"],
  [0, 0, 0, 10, 0, "Res"],
  [0, 0, 0, 0, 0, "Res"],
];

const TDNota = ({ nota }: { nota: number }) => (
  <td className="text-center italic text-sm">
    {nota === 0 ? <span className="text-red-300">0</span> : nota}
  </td>
);

export default function TaulaDeTipologies() {
  return (
    <table>
      <thead>
        <tr className="font-bold border-b">
          <td>C</td>
          <td>S</td>
          <td>L</td>
          <td>E</td>
          <td>Nota</td>
          <td>Descripció</td>
        </tr>
      </thead>
      <tbody>
        {tipologies.map(([C, S, L, E, Nota, Desc], i) => (
          <tr key={i}>
            <TDNota nota={C} />
            <TDNota nota={S} />
            <TDNota nota={L} />
            <TDNota nota={E} />
            <td className="text-center font">{Nota}</td>
            <td className={Desc.endsWith("*") ? "font-bold" : ""}>
              {Desc.replace("*", "")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
