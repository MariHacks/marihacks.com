import BackArrow from "../../components/BackArrow";
import { SiGmail } from "react-icons/si";
import { imageManager } from "../../helper/ressourceManagers";

const Workshop = () => {
  const bulletPoints = [
    "Introduction to Python",
    "Introduction to web development",
    "Git and GitHub basics",
    "Artificial intelligence",
    "Entrepreneurship",
    "Feel free to propose your own topic and reach out to us with any questions!",
  ];
  return (
    <div className="acp-container">
      <BackArrow text="Application center" link="/application-center" />
      <div className="acp-card-bg">
        <div className="acp-text">
          <p className="font-bold acp-title">Workshops</p>
          <p className="">
            Panelist registration will open very soon! Workshops, technical or
            non-technical, are essential to MariHacks. They're the perfect way
            for hackers to get started on a new technology or learn more about a
            topic in depth!
          </p>
          <br className="my-2" />
          <p>
            Introductory and advanced workshops on a wide variety of topics are
            welcome, such as:
          </p>
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

          <a
            className="acp-apply-btn"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfvpdyxO02I8aAqEIP5PCTAkMvvMac3Q7zvLcOJs746ub3C-Q/viewform?usp=sf_link"
          >
            Present a workshop
          </a>
        </div>
        <img
          className="acp-img"
          src={imageManager("workshop").acpImg}
          alt="photo"
        />
      </div>
    </div>
  );
};

export default Workshop;
