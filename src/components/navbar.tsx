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
          <p className="navbar-title font-bold">MariHacks</p>
        </a>
        <div className="navbar-links">
          <div className="navbar-separator"></div>
          <ThemedButtons link="#about" text="About" />
          <ThemedButtons link="#sponsors" text="Sponsors" />
          <ThemedButtons link="#FAQ" text="FAQ" />
          <NavbarLink link="/application-center" text="Application Center" />
          <Link to="/registration" className="navbar-register-btn">
            Register
          </Link>
        </div>

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
        <div className="fixed w-full top-[60px] bg-[--spaceColor] z-30 flex flex-col items-center p-8">
          <ThemedButtons link="#about" text="About" />
          <ThemedButtons link="#sponsors" text="Sponsors" />
          <ThemedButtons link="#FAQ" text="FAQ" />
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
