import "../css/carousel.css";

const CarouselItem = ({ img }: { img: string }) => {
  return <img className="carousel-img" src={img} />;
};

const Carousel = () => {
  const images: string[] = [
    "../../public/carousel/img1.jpg",
    "../../public/carousel/img2.jpg",
    "../../public/carousel/img3.jpg",
    "../../public/carousel/DSCF5800.jpg",
    "../../public/carousel/DSCF5872.jpg",
    "../../public/carousel/DSCF5928.jpg",
    "../../public/carousel/DSCF5938.jpg",
    "../../public/carousel/DSCF5946.jpg",
  ];
  return (
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
  );
};

export default Carousel;
