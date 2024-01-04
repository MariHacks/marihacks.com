import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BackArrow = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link className="w-fit flex items-center md:text-[24px] group" to={link}>
      <FaArrowLeft className="group-hover:scale-0 mr-[4px] transition" />
      <p className="group-hover:-translate-x-[28px] transition">{text}</p>
    </Link>
  );
};

export default BackArrow;
