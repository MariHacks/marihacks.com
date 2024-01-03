import "../css/navbar.css";

import { IoClose, IoMenu } from "react-icons/io5";

import { FaBars } from "react-icons/fa6";
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
  return (
    <nav className="navbar">
      <div className="flex items-center">
        <a className="flex items-center" href="#home">
          <img className="navbar-logo" src="./images/logo.png" />
          <p className="navbar-title boldText">MariHacks</p>
        </a>
        <div className="navbar-links">
          <div className="navbar-separator"></div>
          <ThemedButtons link="#about" text="About" />
          <ThemedButtons link="#sponsors" text="Sponsors" />
          <ThemedButtons link="#FAQ" text="FAQ" />
          <NavbarLink link="/more" text="More" />
        </div>
      </div>
      <Link to="/" className="navbar-register-btn">
        Register
      </Link>

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
  );
};

export default Navbar;
