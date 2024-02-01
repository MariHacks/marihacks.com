import "../css/sponsors.css";

import { Link } from "react-router-dom";
import { imageManager } from "../helper/ressourceManagers";
import { sponsors } from "../docs/sponsors";

const GoldSponsor = ({ imgSrc, link }: { imgSrc: string; link: string }) => {
  return (
    <a className="sponsor-logo-gold" href={link}>
      <img loading="lazy" className="w-full" src={imgSrc} alt={link} />
    </a>
  );
};

const SilverSponsor = ({ imgSrc, link }: { imgSrc: string; link: string }) => {
  return (
    <a className="sponsor-logo-silver" href={link}>
      <img loading="lazy" className="w-full" src={imgSrc} alt={link} />
    </a>
  );
};

const Sponsors = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <hr className="w-1/4 border border-black my-4 md:my-8" />

      <div className="sponsor-card">
        {/* <div className="grid grid-cols-2 gap-8">
          {sponsorsArray.map((sponsor: SponsorInfo) => {
            return <GoldSponsor imgSrc={sponsor.imgUrl} link={sponsor.link} />;
          })}
        </div> */}

        <div className="flex md:flex-row flex-col items-center justify-center">
          <GoldSponsor
            imgSrc={sponsors.marianopolis.imgUrl}
            link={sponsors.marianopolis.link}
          />
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center">
          <GoldSponsor imgSrc={sponsors.nbc.imgUrl} link={sponsors.nbc.link} />
          <GoldSponsor
            imgSrc={sponsors.wolfram.imgUrl}
            link={sponsors.wolfram.link}
          />
        </div>
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
            imgSrc={sponsors.leadingleaders.imgUrl}
            link={sponsors.leadingleaders.link}
          />
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center">
          <SilverSponsor
            imgSrc={sponsors.onepassword.imgUrl}
            link={sponsors.onepassword.link}
          />

          <SilverSponsor
            imgSrc={sponsors.echo.imgUrl}
            link={sponsors.echo.link}
          />
        </div>
      </div>

      <div className="flex md:my-8 mb-4">
        <Link
          className="sponsors-button mr-5"
          to="/application-center/sponsorship"
        >
          Become a sponsor
        </Link>
        <a
          className="sponsors-button"
          href={imageManager("prospectus_2024").pdf}
        >
          See prospectus
        </a>
      </div>

      <p className="font-bold section-title">Partners</p>
      <p className="section-subtitle">We work with the best.</p>
      <hr className="w-1/4 border border-black my-4 md:my-8" />

      <div className="sponsor-card md:w-1/2 flex items-center">
        <SilverSponsor imgSrc={sponsors.mlh.imgUrl} link={sponsors.mlh.link} />
        <SilverSponsor
          imgSrc={sponsors.brebeufhxnoir.imgUrl}
          link={sponsors.brebeufhxnoir.link}
        />
      </div>
    </div>
  );
};

export default Sponsors;
