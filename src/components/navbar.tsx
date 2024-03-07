import "../css/navbar.css";

import { IoClose, IoMenu } from "react-icons/io5";

import { Link } from "react-router-dom";
import ThemedButtons from "./themedButtons";
import { useState } from "react";

const NavbarLink = ({ link, text }: { link: string; text: string }) => {
  return (
    <Link className="navbar-link" to={link}>
      {text}
    </Link>
  );
};

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // const width = window.innerWidth;
  // var prevScrollpos = window.scrollY;
  // window.onscroll = function () {
  //   var currentScrollPos = window.scrollY;
  //   if (width < 768) return;
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("navbar")!.style.top = "0";
  //   } else {
  //     document.getElementById("navbar")!.style.top = "-100px";
  //     setIsExpanded(false);
  //   }

  //   if (window.screenX > -5) {
  //     prevScrollpos = currentScrollPos;
  //   }
  // };

  window.onscroll = function () {
    setIsExpanded(false);
  };

  return (
    <>
      <nav id="navbar" className={`navbar scrollFeature`}>
        <a className="flex items-center" href="#home">
          <img
            className="navbar-logo"
            src="./images/new_logo_gradient_cropped.png"
          />
        </a>
        <div className="navbar-links">
          <div className="navbar-separator"></div>
          <ThemedButtons link="#about" text="About" />
          <ThemedButtons link="#sponsors" text="Sponsors" />
          <ThemedButtons link="#FAQ" text="FAQ" />
          <ThemedButtons link="/schedule" text="Schedule" />
          <NavbarLink link="/application-center" text="Application Center" />
          <Link to="/registration" className="navbar-register-btn">
            Register
          </Link>
          <div className="w-[10%]"></div>
        </div>
        <a
          id="mlh-trust-badge"
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
          target="_blank"
          className="w-[20%] md:w-[7%] fixed right-0 top-0 z-[1000] mr-[15%] md:mr-[2%]"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
            alt="Major League Hacking 2024 Hackathon Season"
            style={{ width: "100%" }}
          />
        </a>

        {isExpanded ? (
          <IoClose
            onClick={() => setIsExpanded(false)}
            className="navbar-responsive-btn"
          />
        ) : (
          <IoMenu
            onClick={() => setIsExpanded(true)}
            className="navbar-responsive-btn"
          />
        )}
      </nav>
      {isExpanded ? (
        <div className="fixed w-full top-[60px] bg-[--spaceColor] z-[30] flex flex-col items-center p-8">
          <ThemedButtons link="#about" text="About" />
          <ThemedButtons link="#sponsors" text="Sponsors" />
          <ThemedButtons link="#FAQ" text="FAQ" />
          <ThemedButtons link="/schedule" text="Schedule" />
          <NavbarLink link="/application-center" text="Application Center" />
          <Link to="/registration" className="navbar-register-btn">
            Register
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
