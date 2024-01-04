import BackArrow from "../../components/backArrow";

const Sponsor = () => {
  const bulletPoints = [
    "Answering participants' technical questions regarding their project",
    "Guiding participants through debugging a specific issue",
    "Encouraging participants in brainstorming ideas and trying new things",
    "Pointing participants to reliable, helpful resources",
    "Mentors can also present workshops and/or help with judging!",
  ];
  return (
    <div className="acp-container">
      <BackArrow text="Application center" link="/application-center" />
      <div className="acp-card-bg">
        <div className="acp-text">
          <p className="font-bold acp-title">Sponsor</p>
          <p className="">
            Mentor registration will open very soon! MariHacks is open to
            programmers of any level, and we encourage participants to try out
            new programming fields and techniques! That being said, our
            hackathon strives to inspire learning, innovation and collaboration,
            which would not be possible without mentors. If you are an
            experienced programmer in one or more domains who loves to help
            others, we would love to have you!
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

          <a className="acp-apply-btn" href="">
            Sponsor MariHacks :)
          </a>
        </div>
        <div className="acp-img"></div>
      </div>
    </div>
  );
};

export default Sponsor;
