import "../css/footer.css";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between mt-20 h-[100px] bg-[--primary-color] p-6 text-white">
      <div className="h-full flex items-center">
        <img className="h-full mr-5" src="./images/duck_logo.png" alt="" />
        <p className="boldText text-[24px]">MariHacks</p>
      </div>

      <div className="text-[100%]">
        <a href="" className="footer-social-info">
          <FaInstagram />
          <p className="ml-2">marihacks</p>
        </a>
        <a
          href="https://www.facebook.com/marihacks/"
          className="footer-social-info"
        >
          <FaFacebookF />
          <p className="ml-2">marihacks</p>
        </a>
        <a href="" className="footer-social-info">
          <FaLinkedinIn />
          <p className="ml-2">marihacks</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
