import "../css/about.css";

import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  console.log(currentIndex);
  const images = [
    "../../assets/carousel/img1.jpg",
    "../../assets/carousel/img2.jpg",
    "../../assets/carousel/img3.jpg",
  ];
  const viewPreviousImg = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((currentIndex) => currentIndex - 1);
    }
  };
  const viewNextImg = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((currentIndex) => currentIndex + 1);
    }
  };

  return (
    <div className="w-1/2 flex flex-col items-center relative">
      <div className="w-full flex rounded-lg">
        <button className="h-full  left-0" onClick={viewPreviousImg}>
          <FaCaretLeft className="about-caret left-0" />
        </button>
        <img className="about-carousel" src={images[currentIndex]} alt="" />
        <button className="h-full  right-0" onClick={viewNextImg}>
          <FaCaretRight className="about-caret right-0" />
        </button>
      </div>
      {/* <div className="w-full h-[100px] absolute -bottom-[50px] wave-layer"></div> */}
      {/* <div className="w-full h-[100px] absolute -top-[50px] rotate-180 wave-layer"></div> */}
    </div>
  );
};

const About = () => {
  return (
    <div className="w-full flex flex-col my-20">
      <div className="flex w-full justify-between">
        <div className="about-card">
          <div className="w-3/4 h-auto">
            <p className="text-[32px] boldText">What is MariHacks?</p>
            <p>
              MariHacks is Montreal's first and largest 2-day hackathon for
              CEGEP and High School students. We will bring together over 200
              developers and technology enthusiasts to create revolutionary
              software projects. Meet fellow hackers, learn new technologies,
              and hone your skills alongside amazing mentors.
            </p>
            <div className="flex mt-2">
              <p className="mr-1">Organized by Marianopolis'</p>
              <a
                className="boldText hover:text-blue-500"
                href="https://mariprogramming.vercel.app/"
              >
                Programming club
              </a>
            </div>
            <div className="mt-2 boldText hover:text-blue-500">
              <Link to="/more" className="">
                Learn more
              </Link>
            </div>
            {/* <div className="w-fit mt-3">
              <Link to="/more" className="themedButtonLearnMore">
                Learn more
              </Link>
            </div> */}
          </div>
        </div>

        <Carousel />
      </div>
    </div>
  );
};

export default About;
