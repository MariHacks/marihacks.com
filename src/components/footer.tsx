import "../css/footer.css";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-20 h-[150px] bg-[--primary-color] p-6 text-white">
      <p className="boldText text-[24px]">Socials</p>
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
    </footer>
  );
};

export default Footer;
