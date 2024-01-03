import "../css/footer.css";

import { SiFacebook, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between mt-20 h-[100px] bg-[--primary-color] px-6 py-2 text-white">
      <div className="h-2/3 md:h-full flex items-center">
        <img
          className="hidden md:block h-full mr-5"
          src="./images/duck_logo.png"
          alt=""
        />
        <p className="boldText md:text-[24px]">MariHacks</p>
      </div>

      <div className="flex flex-col items-end justify-between md:text-[24px]">
        <div className="flex ">
          <a href="" className="footer-social-info">
            <SiInstagram />
          </a>
          <a
            href="https://www.facebook.com/marihacks/"
            className="footer-social-info"
          >
            <SiFacebook />
          </a>
          <a href="" className="footer-social-info">
            <SiLinkedin />
          </a>
        </div>
        <p className="footer-social-info">
          <SiGmail />
          <p className="ml-2">team@marihacks.com</p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
