import "../../css/application-center-pages.css";

import BackArrow from "../../components/BackArrow";
import { SiGmail } from "react-icons/si";
import { imageManager } from "../../helper/ressourceManagers";

const Mentorship = () => {
  const bulletPoints = [
    "Answering participants' technical questions regarding their project",
    "Guiding participants through debugging a specific issue",
    "Encouraging participants in brainstorming ideas and trying new things",
    "Pointing participants to reliable, helpful resources",
    "Mentors can also present workshops!",
  ];

  return (
    <div className="acp-container">
      <BackArrow text="Application center" link="/application-center" />
      <div className="acp-card-bg">
        <div className="acp-text">
          <p className="font-bold acp-title">Mentorship</p>
          <p className="">
            {/* TODO(2027): replace with real dates, e.g. "Mentor registration opens <OPEN DATE> and closes <CLOSE DATE> at 11:59pm!" */}
            Mentor registration dates for 2027 will be announced soon — stay tuned! MariHacks is open to programmers of
            any level, and we encourage participants to try out new programming
            fields and techniques! That being said, our hackathon strives to
            inspire learning, innovation and collaboration, which would not be
            possible without mentors. If you are an experienced programmer in
            one or more domains who loves to help others, we would love to have
            you!
          </p>
          <br className="my-2" />
          <p>Some of a mentor's roles usually include:</p>
          <ul className="list-disc ml-5">
            {bulletPoints.map((bulletPoint, key) => {
              return (
                <li key={key} className="acp-bullet-point">
                  {bulletPoint}
                </li>
              );
            })}
          </ul>
          <a
            href="mailto:team@marihacks.com"
            className="w-fit flex items-center hover:opacity-70 transition mt-2"
          >
            <SiGmail />
            <p className="ml-2">team@marihacks.com</p>
          </a>

            {/* TODO(2027): add the new mentor form link, then re-enable by removing
                acp-btn-disabled-styles acp-btn-disabled-position from className. */}
          <a
            className="acp-apply-btn acp-btn-disabled-styles acp-btn-disabled-position"
            href="#"
          >
            Apply to be a mentor
          </a>
        </div>
        <img
          className="acp-img"
          src={imageManager("mentorship").acpImg}
          alt="photo"
        />
      </div>
    </div>
  );
};

export default Mentorship;
