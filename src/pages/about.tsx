import "../css/about.css";

import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  console.log(currentIndex);
  const images = [
    "./carousel/img1.jpg",
    "./carousel/img2.jpg",
    "./carousel/img3.jpg",
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
    <div className="md:w-1/2 flex flex-col items-center relative">
      <div className="w-full flex items-center rounded-lg">
        <button className="h-full left-0" onClick={viewPreviousImg}>
          <FaCaretLeft className="about-caret left-0" />
        </button>
        <img className="about-carousel" src={images[currentIndex]} alt="" />
        <button className="h-full right-0" onClick={viewNextImg}>
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
    <div className="w-full flex flex-col px-8">
      <div className="flex flex-col md:flex-row w-full">
        <div className="about-card">
          <p className="text-[20px] md:text-[36px] boldText">
            What is MariHacks?
          </p>
          <p className="">
            MariHacks is Montreal's first and largest 2-day hackathon for CEGEP
            and High School students. We will bring together over 200 developers
            and technology enthusiasts to create revolutionary software
            projects. Meet fellow hackers, learn new technologies, and hone your
            skills alongside amazing mentors.
          </p>
          <p className="mt-2">
            Organized by Marianopolis'{" "}
            {
              <a
                className="boldText hover:text-blue-500"
                href="https://mariprogramming.vercel.app/"
              >
                Programming club
              </a>
            }
          </p>

          <div className="w-fit boldText hover:text-blue-500 mt-2">
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

        <Carousel />
      </div>
    </div>
  );
};

export default About;
