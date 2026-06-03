import BackArrow from "../../components/BackArrow";
import { imageManager } from "../../helper/ressourceManagers";

const Judging = () => {
  const bulletPoints = [
    "Provide helpful critique on participant’s submissions",
    "Decide on the winners",
    "Judges are also welcome to present workshops!",
  ];
  return (
    <div className="acp-container">
      <BackArrow text="Application center" link="/application-center" />
      <div className="acp-card-bg">
        <div className="acp-text">
          <p className="font-bold acp-title">Judging</p>
          <p className="">
            {/* TODO(2027): replace with real dates, e.g. "Judging registration opens <OPEN DATE> and closes <CLOSE DATE> at 11:59pm!" */}
            Judging registration dates for 2027 will be announced soon — stay tuned! Based on the judging criteria for
            the submissions, judges would bring their expert insights in order
            to select the winners. Thus, if you are a professional in the field
            of programming or have a professional background of working with
            hackathons, MariHacks would love to welcome you as a judge for our
            event!
          </p>
          <br className="my-2" />
          <p>As part of the panel of judges, your roles usually include:</p>
          <ul className="list-disc ml-5">
            {bulletPoints.map((bulletPoint, key) => {
              return (
                <li key={key} className="acp-bullet-point">
                  {bulletPoint}
                </li>
              );
            })}
          </ul>

          {/* TODO(2027): add the new judge form link, then re-enable by removing
              acp-btn-disabled-styles acp-btn-disabled-position from className. */}
          <a
            className="acp-apply-btn acp-btn-disabled-styles acp-btn-disabled-position"
            href="#"
          >
            Apply to be a judge
          </a>
        </div>
        <img
          className="acp-img"
          src={imageManager("judging").acpImg}
          alt="photo"
        />
      </div>
    </div>
  );
};

export default Judging;
