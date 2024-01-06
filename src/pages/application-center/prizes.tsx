import BackArrow from "../../components/BackArrow";
import { imageManager } from "../../helper/ressourceManagers";

const Prizes = () => {
  const bulletPoints = [
    "Advanced category 1st Place Prize: 125$ Amazon Gift card",
    "Advanced category 2nd Place Prize: 100$ Amazon Gift card",
    "Advanced category 3rd Place Prize: 75$ Amazon Gift card",
    "Beginner category 3rd Place Prize: 75$ Amazon Gift card",
    "Beginner category 3rd Place Prize: 50$ Amazon Gift card",
    "Beginner category 3rd Place Prize: 25$ Amazon Gift card",
  ];
  return (
    <div className="acp-container">
      <BackArrow text="Application center" link="/application-center" />
      <div className="acp-card-bg">
        <div className="acp-text">
          <p className="font-bold acp-title">Prizes</p>
          <p className="">
            MariHacks offers lots of great prizes to add to the fun! During
            MariHacks VI, 11,000 $ CAD worth of prizes were offered to our
            participants (check out{" "}
            <a
              className="text-blue-500 hover:text-blue-700"
              href="https://marihacks-2023.devpost.com/?ref_feature=challenge&ref_medium=discover"
            >
              Devpost
            </a>{" "}
            for more details). Stay tuned for our prize reveal this year!
          </p>
          <br className="my-2" />
          <p>Little sneakpeak:</p>
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
            href="https://marihacks-2023.devpost.com/?ref_feature=challenge&ref_medium=discover"
          >
            See more
          </a>
        </div>
        <img className="acp-img" src={imageManager("prizes").acpImg} />
      </div>
    </div>
  );
};

export default Prizes;
