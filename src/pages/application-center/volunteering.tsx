import BackArrow from "../../components/BackArrow";
import { imageManager } from "../../helper/ressourceManagers";

const Volunteering = () => {
  const bulletPoints = [
    "Welcome and check-in participants",
    "Guide participants to coding spaces, the cafeteria, the auditorium, their judging room, and so on",
    "Distribute promotional material, food, snacks and more",
    "Setup workshops and mini-events",
    "Welcome and brief sponsors",
  ];
  return (
    <div className="acp-container">
      <BackArrow text="Application center" link="/application-center" />
      <div className="acp-card-bg">
        <div className="acp-text">
          <p className="font-bold acp-title">Volunteering</p>
          <p className="">
            Volunteer registration will open very soon! MariHacks is run by a
            small team of Marianopolis students, and the event would not be as
            fun or even possible without our amazing volunteers! If you are a
            CEGEP student interested in helping out and you are available during
            some parts or the entirety of MariHacks (see our schedule), don’t
            hesitate to sign up to volunteer!
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
            className="acp-apply-btn"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc1ziA43w4z4tESo3G2hkvD5M896_9Wmr7LCT3bTyKXYOXNbA/viewform?usp=sf_link"
          >
            Apply to be a volunteer
          </a>
        </div>
        <img className="acp-img" src={imageManager("volunteering").acpImg} />
      </div>
    </div>
  );
};

export default Volunteering;
