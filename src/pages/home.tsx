import "../css/background.css";
import "../css/landing.css";

import About from "./about";
import Carousel from "./carousel";
import Faq from "./faq";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ScrollToTop from "../components/scrollToTop";
import Sponsors from "./sponsors";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";

const Quotes = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Best pre-university Hackathon.",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Free for everyone.",
        1000,
        "Most exciting and fun event.",
        1000,
      ]}
      wrapper="p"
      speed={25}
      className="boldText text-[20px] md:text-[48px] text-center my-[3%]"
      repeat={Infinity}
    />
  );
};

const Landing = () => {
  return (
    <div className="h-full px-10 md:px-20 flex flex-col items-center justify-center md:justify-between md:flex-row">
      <div className="md:w-1/2">
        <div className="landing-title-moscot">
          <p className="boldText title">
            MARI
            <br />
            HACKS
          </p>
          {/* <img src="./images/duck_logo.png" className="md:hidden w-1/2" /> */}
        </div>

        <div className="md:ml-2 md:mt-16 mt-4">
          <p className="subtitle boldText">Marianopolis' very own Hackathon.</p>
          <hr className="my-4 md:my-8" />
          <p className="text-white text-[12px] md:text-[16px]">
            April 5-6, 2024
          </p>
          <p className="text-gray-400 text-[12px] md:text-[16px]">
            Marianopolis College | In-person Hackathon
          </p>
        </div>
      </div>
      <img
        src="./images/duck_logo.png"
        className="w-3/4 mt-10 md:w-1/2 md:m-0"
      />
    </div>
  );
};

const Home = () => {
  return (
    <div className="">
      <section
        id="home"
        className="relative w-screen h-screen bg-[#001220] bg-contain bg-repeat stars bg-fixed"
      >
        <Navbar />
        <Landing />

        <div className="spacer bg-[url('/bg.svg')] h-[100px] md:h-[200px] bottom-0"></div>
      </section>
      <div className="bg-[--secondary-color]">
        <hr className="border border-black mx-[10%]" />
        <Quotes />
        <hr className="border border-black mx-[10%]" />
        <section id="about" className="py-10 md:px-32">
          <About />
        </section>
        <section id="photos" className="">
          <p className="section-title">This is MariHacks' 7th year!</p>
          <p className="section-subtitle">We made a lot of memories.</p>
          <Carousel />
        </section>

        <section id="sponsors" className="py-10 md:px-32">
          <p className="section-title">Sponsors</p>
          <p className="section-subtitle">
            MariHacks wouldn't be possible without them.
          </p>
          <Sponsors />
        </section>
        <section id="FAQ" className="md:px-32">
          <p className="section-title">FAQ</p>
          <p className="section-subtitle">Questions? No problem.</p>

          <Faq />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
6;
