import "../css/footer.css";

import { SiFacebook, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between mt-8 h-[80px] md:h-[125px] bg-[--primary-color] px-6 py-2 text-white">
      <div className="h-2/3 md:h-full flex items-center">
        <a href="#home">
          <img
            className="navbar-logo"
            src="./images/new_logo_gradient_cropped.png"
          />
        </a>

        {/* <img
          className="hidden md:block h-full ml-5"
          src="./images/duck_logo.png"
          alt=""
        /> */}
      </div>

      <div className="flex flex-col items-end justify-between md:flex-row md:items-center md:text-[24px]">
        <div className="flex items-center">
          <a
            href="https://www.instagram.com/marihacks/"
            className="footer-social-info"
          >
            <SiInstagram />
          </a>
          <a
            href="https://www.facebook.com/marihacks/"
            className="footer-social-info"
          >
            <SiFacebook />
          </a>
          <a
            href="https://www.linkedin.com/company/marihacks/"
            className="footer-social-info"
          >
            <SiLinkedin />
          </a>
        </div>
        <a
          href="mailto:team@marihacks.com"
          className="footer-social-info mt-2 md:mt-0"
        >
          <SiGmail />
          <p className="ml-2">team@marihacks.com</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
