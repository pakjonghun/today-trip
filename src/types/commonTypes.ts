export enum IconEnum {
  "icon" = "icon",
  "text" = "text",
  "mixed" = "mixed",
}

export type DirectionType = "previous" | "next";
export type IconType = keyof typeof IconEnum;
