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
          <GoldSponsor imgSrc={sponsors.msu.imgUrl} link={sponsors.msu.link} />
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center">
          <GoldSponsor 
            imgSrc={sponsors.alten.imgUrl} 
            link={sponsors.alten.link} 
          />
          <GoldSponsor
            imgSrc={sponsors.cae.imgUrl}
            link={sponsors.cae.link}
          />
          <GoldSponsor imgSrc={sponsors.nbc.imgUrl} link={sponsors.nbc.link} />

        </div>

        <div className="flex md:flex-row flex-col items-center justify-center">
          <GoldSponsor
            imgSrc={sponsors.concordia.imgUrl}
            link={sponsors.concordia.link}
          />
          <GoldSponsor
            imgSrc={sponsors.morganStanley.imgUrl}
            link={sponsors.morganStanley.link}
          />

          <GoldSponsor
            imgSrc={sponsors.wolfram.imgUrl}
            link={sponsors.wolfram.link}
          />
          <GoldSponsor
            imgSrc={sponsors.autodesk.imgUrl}
            link={sponsors.autodesk.link}
          />
        </div>
        
        <div className="flex md:flex-row flex-col items-center justify-center">
          <GoldSponsor
            imgSrc={sponsors.laitchoco.imgUrl}
            link={sponsors.laitchoco.link}
          />
          <GoldSponsor
            imgSrc={sponsors.levio.imgUrl}
            link={sponsors.levio.link}
          />
          <GoldSponsor
            imgSrc={sponsors.liftoff.imgUrl}
            link={sponsors.liftoff.link}
          />
          <GoldSponsor
            imgSrc={sponsors.genpact.imgUrl}
            link={sponsors.genpact.link}
          />
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center">
          <GoldSponsor
            imgSrc={sponsors.UdeM.imgUrl}
            link={sponsors.UdeM.link}
          />
          <GoldSponsor
            imgSrc={sponsors.echo3d.imgUrl}
            link={sponsors.echo3d.link}
          />
          <GoldSponsor
            imgSrc={sponsors.onepassword.imgUrl}
            link={sponsors.onepassword.link}
          />
          <GoldSponsor
            imgSrc={sponsors.cjendg.imgUrl}
            link={sponsors.cjendg.link}
          />

        </div>

        <div className="flex md:flex-row flex-col justify-center items-center">
          <GoldSponsor
            imgSrc={sponsors.learners.imgUrl}
            link={sponsors.learners.link}
          />
          <GoldSponsor
            imgSrc={sponsors.stickers.imgUrl}
            link={sponsors.stickers.link}
          />
          <GoldSponsor
            imgSrc={sponsors.dominos.imgUrl}
            link={sponsors.dominos.link}
          />
          <GoldSponsor
            imgSrc={sponsors.fuse.imgUrl}
            link={sponsors.fuse.link}
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
          href={imageManager("EN_MariHacks_Sponsorship_Prospectus_2026").pdf}
        >
          See prospectus
        </a>
      </div>

      <p className="font-bold section-title">Partners</p>
      <p className="section-subtitle">We work with the best.</p>
      <hr className="w-1/4 border border-black my-4 md:my-8" />

      <div className="sponsor-card md:w-1/2 flex items-center justify-center">
        <GoldSponsor imgSrc={sponsors.mlh.imgUrl} link={sponsors.mlh.link} />
        <GoldSponsor
          imgSrc={sponsors.brebeufhxnoir.imgUrl}
          link={sponsors.brebeufhxnoir.link}
        />
      </div>
    </div>
  );
};

export default Sponsors;
