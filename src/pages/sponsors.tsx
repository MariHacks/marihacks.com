import "../css/sponsors.css";

const GoldSponsor = ({ imgSrc, link }: { imgSrc: string; link: string }) => {
  return (
    <a className="sponsor-logo-gold" href={link}>
      <img className="h-full" src={imgSrc} alt="" />
    </a>
  );
};

const SilverSponsor = ({ imgSrc, link }: { imgSrc: string; link: string }) => {
  return (
    <a className="sponsor-logo-silver" href={link}>
      <img className="h-full" src={imgSrc} alt="" />
    </a>
  );
};

const Sponsors = () => {
  const sponsors = {
    uofm: { imgUrl: "../../public/sponsors/uofm.png", link: "" },
    marianopolis: { imgUrl: "../../public/sponsors/mari.png", link: "" },
    onepassword: { imgUrl: "../../public/sponsors/1password.png", link: "" },
    wolfram: {
      imgUrl: "../../public/sponsors/wolfram.png",
      link: "https://www.wolfram.com/",
    },
    echo: { imgUrl: "../../public/sponsors/echo.png", link: "" },
    brebeufhx: { imgUrl: "../../public/sponsors/brebeufhx.png", link: "" },
    brebeufhxnoir: {
      imgUrl: "../../public/sponsors/brebeufhxnoir.png",
      link: "",
    },
    mlh: "../../public/sponsors/mlh.png",
  };
  return (
    <div className="w-full flex flex-col items-center">
      <hr className="w-1/4 border border-black my-8" />

      <div className="sponsor-card">
        <div className="flex justify-center">
          <GoldSponsor
            imgSrc={sponsors.uofm.imgUrl}
            link={sponsors.marianopolis.link}
          />
          <GoldSponsor
            imgSrc={sponsors.marianopolis.imgUrl}
            link={sponsors.marianopolis.link}
          />
        </div>

        <div className="flex justify-center">
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

      <p className="boldText text-[48px] mt-8">Partners</p>
      <p className="text-[24px]">We work with the best.</p>
      <hr className="w-1/4 border border-black my-8" />

      <div className="flex justify-center sponsor-card">
        <SilverSponsor imgSrc={sponsors.mlh} link="" />
        <SilverSponsor imgSrc={sponsors.brebeufhxnoir.imgUrl} link="" />
      </div>

      {/* Prospectus */}
    </div>
  );
};

export default Sponsors;
