import "../css/carousel.css";

import { imageManager } from "../helper/ressourceManagers";

const CarouselItem = ({ img }: { img: string }) => {
  return (
    <img
      loading="lazy"
      className="carousel-img"
      src={img}
      alt="last year's photo :)"
    />
  );
};

const Carousel = () => {
  const images = [];

  for (let i = 1; i < 9; i++) {
    images.push(imageManager(`${i}`).carouselImg);
  }

  return (
    <div className="w-full flex flex-col items-center">
      <hr className="w-1/4 border border-black my-4 md:my-8" />

      <div className="carousel-container">
        <div className="carousel-track">
          {images.map((image) => {
            return <CarouselItem img={image}></CarouselItem>;
          })}
          {images.map((image) => {
            return <CarouselItem img={image}></CarouselItem>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
