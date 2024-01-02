import "../css/navbar.css";

import { Link } from "react-router-dom";
import ThemedButtons from "./themedButtons";

const NavbarLinks = ({ link, text }: { link: string; text: string }) => {
  return (
    <Link className="navbar-link" to={link}>
      {text}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="h-full flex items-center">
        <a className="h-full" href="#home">
          <img
            className="hidden md:block md:h-[100%] aspect-square"
            src="./images/logo.png"
          />
        </a>
        {/* <a className="boldText text-[32px] text-white" href="">
          MariHacks
        </a> */}
        <div className="hidden md:flex items-center">
          <div className="h-[60px] ml-[20px] border-l border-white"></div>
          <ThemedButtons link="#about" text="About" />
          <ThemedButtons link="#sponsors" text="Sponsors" />
          <ThemedButtons link="#FAQ" text="FAQ" />
          <NavbarLinks link="/more" text="More" />
        </div>
      </ul>
      <Link to="/" className="hidden md:block md:navbar-register-button">
        Register
      </Link>
    </nav>
  );
};

export default Navbar;
