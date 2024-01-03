import "../css/sponsors.css";

import { Link } from "react-router-dom";

const GoldSponsor = ({ imgSrc, link }: { imgSrc: string; link: string }) => {
  return (
    <a className="sponsor-logo-gold" href={link}>
      <img className="w-full" src={imgSrc} alt={link} />
    </a>
  );
};

const SilverSponsor = ({ imgSrc, link }: { imgSrc: string; link: string }) => {
  return (
    <a className="sponsor-logo-silver" href={link}>
      <img className="w-full" src={imgSrc} alt={link} />
    </a>
  );
};

const Sponsors = () => {
  type SponsorInfo = {
    imgUrl: string;
    link: string;
  };
  const imgDir = "./sponsors";
  const sponsors: { [key: string]: SponsorInfo } = {
    msu: { imgUrl: `./sponsors/msu.png`, link: "" },
    concordia: { imgUrl: `$./sponsors/concordia.png`, link: "" },
    uofm: { imgUrl: "./sponsors/uofm.png", link: "" },
    marianopolis: { imgUrl: "./sponsors/mari.png", link: "" },
    onepassword: { imgUrl: "./sponsors/1password.png", link: "" },
    wolfram: {
      imgUrl: "./sponsors/wolfram.png",
      link: "https://www.wolfram.com/",
    },
    echo: { imgUrl: "./sponsors/echo.png", link: "" },
    brebeufhx: { imgUrl: "./sponsors/brebeufhx.png", link: "" },
    brebeufhxnoir: {
      imgUrl: "./sponsors/brebeufhxnoir.png",
      link: "",
    },
    mlh: { imgUrl: "./sponsors/mlh.png", link: "" },
  };
  return (
    <div className="w-full flex flex-col items-center">
      <hr className="w-1/4 border border-black my-4 md:my-8" />

      <div className="sponsor-card">
        <div className="flex md:flex-row flex-col items-center justify-center">
          <GoldSponsor imgSrc={sponsors.msu.imgUrl} link={sponsors.msu.link} />
          <GoldSponsor
            imgSrc={sponsors.concordia.imgUrl}
            link={sponsors.concordia.link}
          />
        </div>
        <div className="flex items-center md:flex-row flex-col justify-center">
          <GoldSponsor
            imgSrc={sponsors.uofm.imgUrl}
            link={sponsors.uofm.link}
          />
          <GoldSponsor
            imgSrc={sponsors.marianopolis.imgUrl}
            link={sponsors.marianopolis.link}
          />
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center">
          <SilverSponsor
            imgSrc={sponsors.onepassword.imgUrl}
            link="https://1password.com/"
          />
          <SilverSponsor
            imgSrc={sponsors.wolfram.imgUrl}
            link={sponsors.wolfram.link}
          />
          <SilverSponsor imgSrc={sponsors.echo.imgUrl} link="" />
        </div>
      </div>

      <div className="flex md:my-8 mb-4">
        <Link className="sponsors-button mr-5" to="/more">
          Become a sponsor
        </Link>
        <Link className="sponsors-button" to="/more">
          See prospectus
        </Link>
      </div>

      <p className="boldText section-title">Partners</p>
      <p className="section-subtitle">We work with the best.</p>
      <hr className="w-1/4 border border-black my-4 md:my-8" />

      <div className="sponsor-card md:w-1/2 flex items-center">
        <SilverSponsor imgSrc={sponsors.mlh.imgUrl} link="" />
        <SilverSponsor imgSrc={sponsors.brebeufhxnoir.imgUrl} link="" />
      </div>
    </div>
  );
};

export default Sponsors;
