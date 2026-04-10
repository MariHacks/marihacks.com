import { imageManager } from "../helper/ressourceManagers";

export type SponsorInfo = {
  imgUrl: string;
  link: string;
};

export const sponsors: { [key: string]: SponsorInfo } = {
  nbc: { imgUrl: imageManager("nbc").sponsorImg, link: "https://www.nbc.ca/" },
  leadingleaders: {
    imgUrl: imageManager("leadinglearners").sponsorImg,
    link: "https://www.leading-learners.com/",
  },
  msu: {
    imgUrl: imageManager("msu").sponsorImg,
    link: "https://www.msucongress.com/",
  },
  concordia: {
    imgUrl: imageManager("concordia").sponsorImg,
    link: "https://www.concordia.ca/ginacody.html",
  },

  marianopolis: {
    imgUrl: imageManager("mari").sponsorImg,
    link: "https://www.marianopolis.edu/",
  },

  wolfram: {
    imgUrl: imageManager("wolfram").sponsorImg,
    link: "https://www.wolfram.com/",
  },

  laitchoco: {
    imgUrl: imageManager("laitchoco").sponsorImg,
    link: "https://lait.org/",
  },

  fuse: {
    imgUrl: "/sponsors/fuse.svg",
    link: "https://www.f.energy/",
  },

  morganStanley: {
    imgUrl: imageManager("morganStanley").sponsorImg,
    link: "https://www.morganstanley.com/",
  },

  UdeM: {
    imgUrl: imageManager("uofm").sponsorImg,
    link: "https://www.umontreal.ca/",
  },

  echo3d: {
    imgUrl: imageManager("echo").sponsorImg,
    link: "https://www.echo3d.com/",
  },

  onepassword: {
    imgUrl: imageManager("1password").sponsorImg,
    link: "https://1password.com/",
  },

  cjendg: {
    imgUrl: imageManager("cjendg").sponsorImg,
    link: "https://cje-ndg.com/",
  },

  learners: {
    imgUrl: imageManager("leadinglearners").sponsorImg,
    link: "",
  },

  stickers: {
    imgUrl: "/sponsors/stand-out-stickers.svg",
    link: "https://www.standoutstickers.com/",
  },

  dominos: {
    imgUrl: imageManager("dominos").sponsorImg,
    link: "https://www.dominos.ca/",
  },

  autodesk: {
    imgUrl: imageManager("autodesk").sponsorImg,
    link: "https://www.autodesk.com/",
  },
  alten: {
    imgUrl: imageManager("alten").sponsorImg,
    link: "https://www.alten.com/",
  },

  cae: {
    imgUrl: imageManager("cae").sponsorImg,
    link: "https://www.cae.com/",
  },

  liftoff: {
    imgUrl: imageManager("liftoff").sponsorImg,
    link: "https://liftoffrank.com/",
  },

  levio: {
    imgUrl: imageManager("levio").sponsorImg,
    link: "https://levioconsulting.com/",
  },

  brebeufhx: {
    imgUrl: imageManager("brebeufhx").sponsorImg,
    link: "https://www.brebeufhackathon.com/",
  },

  brebeufhxnoir: {
    imgUrl: imageManager("brebeufhxnoir").sponsorImg,
    link: "https://www.brebeufhackathon.com/",
  },

    incogni: {
    imgUrl: imageManager("incogni").sponsorImg,
    link: "https://incogni.com/",
  },

  saily: {
    imgUrl: imageManager("saily").sponsorImg,
    link: "https://saily.com/",
  },

  nordvpn: {
    imgUrl: imageManager("nordvpn").sponsorImg,
    link: "https://www.nordvpn.com/",
  },

  nexos: {
    imgUrl: imageManager("nexos").sponsorImg,
    link: "https://nexos.ai/",
  },
  
  mlh: { imgUrl: imageManager("mlh").sponsorImg, link: "https://mlh.io/" },
};

// export const sponsorsArray: SponsorInfo[] = [
//   { imgUrl: imageManager("nbc").sponsorImg, link: "" },
//   { imgUrl: imageManager("msu").sponsorImg, link: "" },
//   { imgUrl: imageManager("msu").sponsorImg, link: "" },
//   { imgUrl: imageManager("concordia").sponsorImg, link: "" },
//   { imgUrl: imageManager("uofm").sponsorImg, link: "" },
//   { imgUrl: imageManager("mari").sponsorImg, link: "" },
//   {
//     imgUrl: imageManager("1password").sponsorImg,
//     link: "https://1password.com/",
//   },
//   {
//     imgUrl: imageManager("wolfram").sponsorImg,
//     link: "https://www.wolfram.com/",
//   },
//   { imgUrl: imageManager("echo").sponsorImg, link: "" },
//   { imgUrl: imageManager("brebeufhx").sponsorImg, link: "" },
//   {
//     imgUrl: imageManager("brebeufhxnoir").sponsorImg,
//     link: "",
//   },
//   { imgUrl: imageManager("mlh").sponsorImg, link: "" },
// ];
