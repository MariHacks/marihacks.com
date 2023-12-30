import "../css/carousel.css";

const CarouselItem = ({ img }: { img: string }) => {
  return <img className="carousel-img" src={img} />;
};

const Carousel = () => {
  const images: string[] = [
    "../../assets/carousel/img1.jpg",
    "../../assets/carousel/img2.jpg",
    "../../assets/carousel/img3.jpg",
    "../../assets/carousel/DSCF5800.jpg",
    "../../assets/carousel/DSCF5872.jpg",
    "../../assets/carousel/DSCF5928.jpg",
    "../../assets/carousel/DSCF5938.jpg",
    "../../assets/carousel/DSCF5946.jpg",
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
