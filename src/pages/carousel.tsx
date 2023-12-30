import "../css/carousel.css";

const CarouselItem = ({ img }: { img: string }) => {
  return <img className="carousel-img" src={img} />;
};

const Carousel = () => {
  const images: string[] = [
    "../../carousel/img1.jpg",
    "../../carousel/img2.jpg",
    "../../carousel/img3.jpg",
    "../../carousel/DSCF5800.jpg",
    "../../carousel/DSCF5872.jpg",
    "../../carousel/DSCF5928.jpg",
    "../../carousel/DSCF5938.jpg",
    "../../carousel/DSCF5946.jpg",
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
