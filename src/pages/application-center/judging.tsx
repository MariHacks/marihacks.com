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
            Judging registration opens February 16th 2026 and closes March 29th 2026 at 11:59pm! Based on the judging criteria for
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

          <a
            className="acp-apply-btn"
            href="https://forms.gle/LHQiJF64LUk9kcpw6"
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
