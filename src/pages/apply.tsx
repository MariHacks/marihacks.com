import "../css/apply.css";

import BackArrow from "../components/BackArrow";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop";

interface CardProps {
  subtitle: string;
  title: string;

  link: string;
}

const Card = ({ subtitle, title, link }: CardProps) => {
  return (
    <Link to={`/application-center${link}`} className="apply-cards">
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-[32px]">{title}</p>
        <p>{subtitle}</p>
      </div>
    </Link>
  );
};

const Apply = () => {
  return (
    <div className="apply-bg">
      <ScrollToTop />
      <div className="p-4 md:p-16 flex flex-col">
        <BackArrow text="Home" link="/" />

        <div className="font-bold text-[32px] md:text-[48px]">
          Get involved in MariHacks!
        </div>
        <hr className="w-1/3 border border-black my-8" />
        {/* Sponsor card */}

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            subtitle="APPLY TO BE A MENTOR"
            title="Mentorship"
            link="/mentorship"
          />
          <Card
            subtitle="APPLY TO BE A SPONSOR"
            title="Sponsorship"
            link="/sponsorship"
          />
          <Card subtitle="SEE WORKSHOPS" title="Workshops" link="/workshops" />
          <Card
            subtitle="APPLY TO BE A VOLUNTEER"
            title="Volunteering"
            link="/volunteering"
          />
          <Card
            subtitle="APPLY TO BE A JUDGE"
            title="Judging"
            link="/judging"
          />
          <Card subtitle="SEE PRIZES" title="Cool Prizes" link="/prizes" />
          <Link
            to="/registration"
            className="apply-cards bg-[--primary-color] text-white"
          >
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-[32px]">Register</p>
              <p>REGISTRATION</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Apply;
