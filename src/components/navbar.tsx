import "../css/navbar.css";

import { Link } from "react-router-dom";
import ThemedButtons from "./themedButtons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="flex items-center">
        <a href="#home">
          <img className="h-[100px] aspect-square" src="./images/logo.png" />
        </a>
        <div className="h-[60px] ml-[20px] border-l border-white"></div>
        <ThemedButtons link="#about" text="About" />
        <ThemedButtons link="#sponsors" text="Sponsors" />
        <ThemedButtons link="#FAQ" text="FAQ" />
      </ul>
      <Link to="/" className="navbar-register-button">
        Register
      </Link>
    </nav>
  );
};

export default Navbar;
