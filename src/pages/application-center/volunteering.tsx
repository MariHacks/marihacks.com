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
            {/* TODO(2027): when the form is live, change back to "Volunteer registration is now open!" */}
            Volunteer registration isn't open yet, stay tuned! MariHacks is run by a small team
            of Marianopolis students, and the event would not be as fun or even
            possible without our amazing volunteers! If you are a CEGEP student
            interested in helping out and you are available during some parts or
            the entirety of MariHacks (see our schedule), don't hesitate to sign
            up to volunteer!
          </p>
          <br className="my-2" />
          <p>Some of a volunteer's roles could include helping us:</p>
          <ul className="list-disc ml-5">
            {bulletPoints.map((bulletPoint, key) => {
              return (
                <li key={key} className="acp-bullet-point">
                  {bulletPoint}
                </li>
              );
            })}
          </ul>

          {/* TODO(2027): add the new volunteer form link, then re-enable by removing
              acp-btn-disabled-styles acp-btn-disabled-position from className. */}
          <a
            className="acp-apply-btn acp-btn-disabled-styles acp-btn-disabled-position"
            href="#"
          >
            Apply to be a volunteer
          </a>
        </div>
        <img
          className="acp-img"
          src={imageManager("volunteering").acpImg}
          alt="photo"
        />
      </div>
    </div>
  );
};

export default Volunteering;
