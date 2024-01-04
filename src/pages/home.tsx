import "../css/background.css";
import "../css/landing.css";

import About from "./about";
import Carousel from "./carousel";
import Faq from "./faq";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Sponsors from "./sponsors";
import { TypeAnimation } from "react-type-animation";

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
      className="font-bold text-[20px] md:text-[48px] text-center my-[3%]"
      repeat={Infinity}
    />
  );
};

const Landing = () => {
  return (
    <div className="h-full px-10 md:px-20 flex flex-col items-center justify-center lg:flex-row">
      <div className="lg:w-1/2">
        <p className="font-bold title">
          MARI
          <br />
          HACKS
        </p>

        <div className="flex flex-col items-center lg:items-start md:ml-2 md:mt-8 lg:mt-16 mt-4">
          <p className="subtitle font-bold">
            Marianopolis' very own Hackathon.
          </p>
          <hr className="my-4 lg:my-6 w-full" />
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
        className="w-3/4 mt-10 lg:w-1/2 md:m-0"
      />
    </div>
  );
};

const Home = () => {
  return (
    <div className="">
      <section
        id="home"
        className="relative w-screen h-screen bg-[--spaceColor] stars bg-contain bg-fixed"
      >
        <Navbar />
        <Landing />

        <div className="spacer wave h-[100px] md:h-[200px] bottom-0"></div>
      </section>
      <div className="bg-[--secondary-color]">
        <hr className="border border-black mx-[10%]" />
        <Quotes />
        <hr className="border border-black mx-[10%]" />
        <section id="about" className="py-10 md:px-16">
          <About />
        </section>
        <section id="photos" className="">
          <p className="section-title">This is MariHacks' 7th year!</p>
          <p className="section-subtitle">We made a lot of memories.</p>
          <Carousel />
        </section>

        <section id="sponsors" className="py-10 lg:px-16">
          <p className="section-title">Sponsors</p>
          <p className="section-subtitle">
            MariHacks wouldn't be possible without them.
          </p>
          <Sponsors />
        </section>
        <section id="FAQ" className="lg:px-16">
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
