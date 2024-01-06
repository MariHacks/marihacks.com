import BackArrow from "../../components/BackArrow";
import { SiGmail } from "react-icons/si";
import { imageManager } from "../../helper/ressourceManagers";

const Sponsorship = () => {
  const bulletPoints = [
    "Mentions during the opening ceremony",
    "Sponsoring challenges and prizes",
    "Sending company mentors, judges and keynote speakers",
    "Extensive Logo exposure on the website, social media posts, t-shirts …",
    "Dedicated booth",
    "Sponsors can propose custom involvement plans tailored to their goals",
  ];
  return (
    <div className="acp-container">
      <BackArrow text="Application center" link="/application-center" />
      <div className="acp-card-bg">
        <div className="acp-text">
          <p className="font-bold acp-title">Sponsor</p>
          <p className="">
            Join us in making MariHacks possible, the premier hackathon for high
            school and CEGEP students in Quebec! Your sponsorship fuels an
            extraordinary opportunity for young tech enthusiasts to ignite their
            passion and connect with like-minded peers. By sponsoring MariHacks,
            you empower hundreds of students to reach their full potential,
            shaping the future leaders of the technology industry, while
            establishing powerful connections and increasing your brand's
            visibility among a broad audience of young tech enthusiasts.
          </p>
          <br className="my-2" />
          <p>
            We prioritize the recognition and involvement of our sponsors.
            Depending on the selected sponsorship tier, you will have the
            opportunity to benefit from the following:
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
          <div className="flex flex-col md:flex-row md:items-center mt-8">
            <a
              className="acp-apply-btn"
              href="https://forms.gle/44oZrJkWsZmNAJ7P6"
            >
              Sponsor MariHacks
            </a>
            <a
              className="acp-apply-btn md:ml-5"
              href={imageManager("prospectus_2024").pdf}
            >
              See prospectus
            </a>
          </div>
        </div>
        <img className="acp-img" src={imageManager("sponsors").acpImg} />
      </div>
    </div>
  );
};

export default Sponsorship;
