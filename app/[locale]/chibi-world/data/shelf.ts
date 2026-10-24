export type ShelfItem = {
  id: string;
  slot: number;
  type: "eye" | "cube" | "unknown";
  color?: "blue" | "purple";
};

export const shelfItems: ShelfItem[] = [
  {
    id: "oraculux-eye",
    slot: 3,
    type: "eye",
  },
  {
    id: "blue-cube",
    slot: 5,
    type: "cube",
    color: "blue",
  },
  {
    id: "purple-cube",
    slot: 7,
    type: "cube",
    color: "purple",
  },
  {
    id: "unknown",
    slot: 9,
    type: "unknown",
  },
];
