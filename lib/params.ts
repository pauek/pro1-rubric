export const alpha: number = 0.5;
export const beta: number = 0.3;
export const gamma: number = 0.2;
export const delta: number = 0.5;

export type Grade = {
  C: number;
  S: number;
  L: number;
  E: number;
};

export const grade = ({ C, S, L, E }: Grade) =>
  (alpha * C + beta * S + gamma * L) * (1 - delta + (delta * E) / 10);

export const textColors: Record<keyof Grade, string> = {
  C: "text-blue-500",
  S: "text-green-600",
  L: "text-yellow-500",
  E: "text-red-500",
};

export const backgroundColors: Record<keyof Grade, string> = {
  C: "bg-blue-500",
  S: "bg-green-600",
  L: "bg-yellow-500",
  E: "bg-red-500",
};

export const tipologies: [number, number, number, number, string][] = [
  [10, 10, 10, 10, "Perfecte"],
  [10, 10, 5, 10, "Manca llegibilitat"],
  [10, 5, 10, 10, "Manca simplicitat"],
  [10, 10, 0, 10, "Només difícil de llegir"],
  [10, 10, 10, 5, "Manca eficiència"],
  [10, 0, 10, 10, "Enrevessat"],
  [10, 10, 5, 5, "Correcte + simple. La resta just"],
  [10, 5, 5, 5, "Correcte. La resta just"],
  [10, 0, 0, 10, "Mínim essent correcte y eficient*"],
  [10, 10, 10, 0, "Màxim essent ineficient*"],
  [0, 10, 10, 10, "Màxim essent incorrecte*"],
  [10, 5.5, 0, 5, "Aprova (1)"],
  [5, 10, 6, 5, "Aprova (2)"],
  [10, 0, 6, 6, "Aprova (3)"],
  [10, 10, 0, 0, "Només correcte + simple"],
  [10, 0, 10, 0, "Enrevessat + ineficient"],
  [0, 10, 0, 10, "Només simple + eficient"],
  [10, 0, 0, 0, "Només correcte*"],
  [0, 0, 10, 10, "Només llegible + eficient"],
  [0, 10, 0, 0, "Només simple"],
  [0, 0, 10, 0, "Només llegible"],
  [0, 0, 0, 10, "Res"],
  [0, 0, 0, 0, "Res"],
];
