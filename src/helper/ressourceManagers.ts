export const imageManager = (name: string) => {
  const sponsorImg = `./sponsors/${name}.webp`;
  const carouselImg = `./carousel/${name}.webp`;
  const brandImg = `./images/${name}.png`;

  return { sponsorImg, carouselImg, brandImg };
};
