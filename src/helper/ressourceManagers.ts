export const imageManager = (name: string) => {
  const sponsorImg = `./sponsors/${name}.webp`;
  const carouselImg = `./carousel/${name}.webp`;
  const brandImg = `./images/${name}.png`;
  const pdf = `./pdfs/${name}.pdf`;
  const acpImg = `./acp/${name}.webp`;

  return { sponsorImg, carouselImg, brandImg, pdf, acpImg };
};
