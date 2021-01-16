import { AlignType } from "../GalleryItem";

export const getAlign = (index: number): AlignType =>
  index % 2 === 0 ? "end" : "start";
