import "../css/background.css";
import "../css/landing.css";

import { AnimatePresence, motion } from "framer-motion";

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
        "Code. Solve. Repeat.",
        1000,
        "Youth Coding, Future Building.",
        1000,
        "Innovation Starts Here.",
        1000,
        "Crack the Code, Shape the Future.",
        1000,
        "Students, Code, Create.",
        1000,
        "Challenge Accepted, Code Completed.",
        1000,
        "High School, Cegep, Hack On!",
        1000,
        "Coding Minds, Changing Game.",
        1000,
        "Hack Hard, Learn Fast.",
        1000,
        "Young Coders, Big Impact.",
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
      <div className="lg:w-1/2 z-10">
        <p className="font-bold title">
          MARI
          <br />
          HACKS
        </p>

        <div className="flex flex-col items-center lg:items-start md:ml-2 md:mt-8 lg:mt-16 mt-4 z-10">
          <p className="subtitle font-bold">Sign up for MariHacks now!</p>
          <hr className="my-4 lg:my-6 w-full" />
          <p className="text-white text-[16px] md:text-[20px]">
            April 5-6, 2024
          </p>
          <p className="text-gray-400 text-[12px] md:text-[16px]">
            Marianopolis College | In-person Hackathon
          </p>
        </div>
      </div>
      <img src="./images/duck_logo.png" className="landing-img z-10" />
    </div>
  );
};

const Home = () => {
  return (
    <div className="">
      <section id="home" className="relative w-full h-screen bg-[--spaceColor]">
        <AnimatePresence mode={"wait"}>
          <motion.div
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              type: "tween",
              duration: 3,
            }}
            variants={{
              initialState: {
                opacity: 0,
              },
              animateState: {
                opacity: 1,
              },
              exitState: {
                opacity: 0,
              },
            }}
            className="absolute w-full h-full stars bg-fixed bg-contain"
          ></motion.div>
        </AnimatePresence>
        <Navbar />
        <Landing />
        <div className="spacer wave"></div>
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
        <section
          id="sponsors"
          className="py-10 lg:px-16 flex flex-col items-center"
        >
          <p className="section-title">MLH code of conduct</p>
          <p className="section-subtitle">
            Be respectful. Harassment and abuse are never tolerated.
          </p>
          <a
            className="sponsors-button"
            href={"https://static.mlh.io/docs/mlh-code-of-conduct.pdf"}
          >
            See code of conduct
          </a>
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
