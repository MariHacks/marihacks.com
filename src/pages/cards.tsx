import "../css/more.css";

import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface CardProps {
  subtitle: string;
  title: string;
  description: string;
  imgSrc: string;
  stats: string[];
  link: string;
}

const Card = ({
  subtitle,
  title,
  description,
  imgSrc,
  stats,
  link,
}: CardProps) => {
  return (
    <Link to={link} className="flex items-center my-4 bg-white more-cards">
      <img className="w-1/2 rounded-l-xl" src={imgSrc} alt="" />
      <div className="w-1/2 flex flex-col justify-center px-10">
        <p>{subtitle}</p>
        <p className="boldText text-[32px]">{title}</p>
        <p className="">{description}</p>
        {/* <p>Last year we had...</p> */}
        <div className="w-full flex mt-3">
          {stats.map((stat) => {
            return <p className="more-stats boldText">{stat}</p>;
          })}
        </div>
      </div>
    </Link>
  );
};

// const PhotoSectionsRight = ({
//   title,
//   description,
//   imgSrc,
//   stats,
// }: PhotoSectionProps) => {
//   return (
//     <div className="flex items-center mt-10">
//       <div className="w-1/2 flex flex-col justify-center px-10">
//         <p className="boldText text-[32px]">{title}</p>
//         <p className="">{description}</p>
//         <div className="w-full grid">
//           {stats.map((stat) => {
//             return (
//               <p className="boldText text-[20px] px-5 py-2 border border-black w-fit rounded-full">
//                 {stat}
//               </p>
//             );
//           })}
//         </div>
//       </div>
//       <img className="themedPhotos" src={imgSrc} alt="" />
//     </div>
//   );
// };

const Cards = () => {
  return (
    <div className="bg-[--secondary-color]">
      <div className="px-64 py-16 flex flex-col">
        <Link className="w-fit flex items-center text-[24px] group" to="/">
          <FaArrowLeft className="group-hover:scale-0 mr-[4px] transition" />
          <p className="group-hover:-translate-x-[28px] transition">Back</p>
        </Link>
        <div className="boldText text-[48px]">Learn more about MariHacks</div>
        <hr className="w-1/2 border border-black my-8" />
        {/* Sponsor card */}
        <Card
          subtitle="APPLY TO BE A MENTOR"
          title="Mentorship"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste?
            Harum recusandae facere atque ratione neque optio eius, quod
            obcaecati aspernatur corrupti consectetur eos illo cupiditate. Neque
            debitis provident voluptatum!"
          imgSrc="./carousel/img1.jpg"
          stats={["20 mentors", "100 schools"]}
          link=""
        />
        <Card
          subtitle="APPLY TO BE A SPONSOR"
          title="Sponsor"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste?
            Harum recusandae facere atque ratione neque optio eius, quod
            obcaecati aspernatur corrupti consectetur eos illo cupiditate. Neque
            debitis provident voluptatum!"
          imgSrc="./carousel/DSCF5946.jpg"
          stats={["5 sponsors"]}
          link=""
        />
        <Card
          subtitle="SEE WORKSHOPS"
          title="Workshop"
          description="Workshops, technical or non-technical, are essential to MariHacks.
          They're the perfect way for hackers to get started on a new technology or to learn about a topic in more depth! 
          Introductory and advanced workshops on a wide variety of topics are welcome, such as:"
          imgSrc="./carousel/img3.jpg"
          stats={["50 workshops"]}
          link=""
        />
        <Card
          subtitle="APPLY TO BE A VOLUNTEER"
          title="Volunteering"
          description="MariHacks is run by a small team of Marianopolis students, and the event would not be as fun or even possible without our amazing volunteers! If you are available during some parts or the entirety of MariHacks (see our schedule) and are interested in helping out, don't hesitate to sign up to volunteer!"
          imgSrc="./carousel/img2.jpg"
          stats={["11 000$ in prizes"]}
          link=""
        />
        <Card
          subtitle="SEE PRIZES"
          title="Cool Prizes"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste?
            Harum recusandae facere atque ratione neque optio eius, quod
            obcaecati aspernatur corrupti consectetur eos illo cupiditate. Neque
            debitis provident voluptatum!"
          imgSrc="./carousel/img2.jpg"
          stats={["11 000$ in prizes"]}
          link=""
        />
      </div>
    </div>
  );
};
export default Cards;
