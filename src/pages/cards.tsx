import "../css/more.css";

import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
  imgSrc: string;
  stats: string[];
}

const Card = ({ title, description, imgSrc, stats }: CardProps) => {
  return (
    <div className="flex items-center my-4 bg-white more-cards">
      <img className="w-1/2 rounded-l-xl" src={imgSrc} alt="" />
      <div className="w-1/2 flex flex-col justify-center px-10">
        <p className="boldText text-[32px]">{title}</p>
        <p className="">{description}</p>
        <div className="w-full flex mt-3">
          {stats.map((stat) => {
            return (
              <p className="boldText px-5 py-2 mr-2 text-white bg-[--primary-color] w-fit rounded-full">
                {stat}
              </p>
            );
          })}
        </div>
      </div>
    </div>
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
        <Link className="flex items-center text-[24px] group" to="/">
          <FaArrowLeft className="group-hover:scale-0 mr-[4px] transition" />
          <p className="group-hover:-translate-x-[28px] transition">Back</p>
        </Link>
        <div className="boldText text-[48px]">Learn more about MariHacks</div>
        <hr className="w-1/2 border border-black my-8" />
        {/* Sponsor card */}
        <Card
          title="Mentorship"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste?
            Harum recusandae facere atque ratione neque optio eius, quod
            obcaecati aspernatur corrupti consectetur eos illo cupiditate. Neque
            debitis provident voluptatum!"
          imgSrc="../../carousel/img1.jpg"
          stats={["20 mentors", "100 schools"]}
        />
        <Card
          title="Workshop"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste?
            Harum recusandae facere atque ratione neque optio eius, quod
            obcaecati aspernatur corrupti consectetur eos illo cupiditate. Neque
            debitis provident voluptatum!"
          imgSrc="../../carousel/img3.jpg"
          stats={["50 workshops"]}
        />
        <Card
          title="Cool Prizes"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste?
            Harum recusandae facere atque ratione neque optio eius, quod
            obcaecati aspernatur corrupti consectetur eos illo cupiditate. Neque
            debitis provident voluptatum!"
          imgSrc="../../carousel/img2.jpg"
          stats={["11 000$ in prizes"]}
        />
      </div>
    </div>
  );
};
export default Cards;
