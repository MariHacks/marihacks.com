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
      className="boldText text-[48px] text-center my-10"
      repeat={Infinity}
    />
  );
};

const Landing = () => {
  return (
    <div className="px-32 my-20 flex justify-between">
      <div className="flex flex-col">
        <p className="text-[200px] leading-[142px] boldText title">
          MARI
          <br />
          HACKS
        </p>
        <div className="ml-2 mt-16">
          <p className="subtitle boldText">Marianopolis' very own Hackathon.</p>
          <hr className="my-8" />
          <p className="text-white">April 5-6, 2024</p>
          <p className="text-gray-400">
            Marianopolis College | In-person Hackathon
          </p>
        </div>
      </div>
      <img src="./images/duck_logo.png" className="h-[500px]" />
    </div>
  );
};

const Home = () => {
  return (
    <div className="w-full h-screen">
      <section
        id="home"
        className="h-full bg-[#001220] bg-[url('/stars.svg')] bg-fixed"
      >
        <header className="h-[10%]">
          <Navbar />
        </header>
        <Landing />

        <div className="spacer bg-[url('/bg.svg')] h-[200px]"></div>
      </section>
      <div className="bg-[--secondary-color]">
        <section id="about" className="px-64">
          <hr className="border border-black mx-32" />
          <Quotes />
          <hr className="border border-black mx-32" />

          <About />
        </section>
        <section id="photos" className="">
          <p className="text-[48px] boldText text-center">
            This is MariHacks' 7th year!
          </p>
          <p className="text-[24px] text-center">We made a lot of memories.</p>
          <Carousel />
        </section>

        <section id="sponsors" className="">
          <p className="text-[48px] boldText text-center">Sponsors</p>
          <p className="text-[24px] text-center">
            MariHacks wouldn't be possible without them.
          </p>
          <Sponsors />
        </section>
        <section id="FAQ" className="mt-10">
          <p className="text-[48px] boldText text-center">FAQ</p>
          <p className="text-[24px] text-center">Questions? No problem.</p>

          <Faq />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
6;
