import { imageManager } from "../helper/ressourceManagers";

export const carouselImgs = Array.from(
  { length: 9 },
  (_, i) => imageManager(`${i + 1}`).carouselImg
);
