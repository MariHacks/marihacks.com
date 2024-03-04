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
  uofm: {
    imgUrl: imageManager("uofm").sponsorImg,
    link: "https://www.umontreal.ca/",
  },
  marianopolis: {
    imgUrl: imageManager("mari").sponsorImg,
    link: "https://www.marianopolis.edu/",
  },
  onepassword: {
    imgUrl: imageManager("1password").sponsorImg,
    link: "https://1password.com/",
  },
  wolfram: {
    imgUrl: imageManager("wolfram").sponsorImg,
    link: "https://www.wolfram.com/",
  },
  echo: {
    imgUrl: imageManager("echo").sponsorImg,
    link: "https://www.echo3d.com/",
  },
  laitchoco: {
    imgUrl: imageManager("laitchoco").sponsorImg,
    link: "https://www.lafamilledulait.com/fr/produits-laitiers/produits/lait-au-chocolat",
  },
  cjendg: {
    imgUrl: imageManager("cjendg").sponsorImg,
    link: "https://cje-ndg.com/fr/",
  },
  brebeufhx: {
    imgUrl: imageManager("brebeufhx").sponsorImg,
    link: "https://www.brebeufhackathon.com/",
  },
  brebeufhxnoir: {
    imgUrl: imageManager("brebeufhxnoir").sponsorImg,
    link: "https://www.brebeufhackathon.com/",
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
