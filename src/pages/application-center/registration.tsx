import { useEffect, useState } from "react";

import BackArrow from "../../components/BackArrow";
import { imageManager } from "../../helper/ressourceManagers";

const Registration = () => {
  const mariHacksEventDate = new Date("4/5/2024");

  const countdown = () => {
    const currentDate = Date.now();

    const totalSecond = (mariHacksEventDate.getTime() - currentDate) / 1000;

    setDays(formatTime(Math.floor(totalSecond / 3600 / 24)));
    setHours(Math.floor(totalSecond / 3600) % 24);
    setMinutes(Math.floor(totalSecond / 60) % 60);
    setSeconds(Math.floor(totalSecond % 60));
  };

  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const formatTime = (time: number): number => {
    return time < 10 ? Number(`0${time}`) : time;
  };

  useEffect(() => {
    countdown();
  }, []);

  setInterval(() => {
    if (seconds !== 0) {
      countdown();
    }
  }, 1000);

  return (
    <div className="acp-container">
      <BackArrow text="Home" link="/" />
      <div className="acp-card-bg mx-auto lg:w-1/2 flex flex-col items-center">
        <div className="flex flex-col items-center text-center">
          <p className="font-bold acp-title">Register</p>
          <p className="font-bold">Welcome to MariHacks VII!</p>
          <p className="my-4">
            We're thrilled to invite all Cegep and high school students to join
            us for an unforgettable hackathon experience on{" "}
            <span className="font-bold">April 5-6, 2024</span>. MariHacks is an
            opportunity for young minds to come together, push boundaries, and
            turn their creative ideas into reality!
          </p>
          <p>
            Applications for MariHacks VII are{" "}
            <span className="font-bold">is now closed.</span>, We will send out
            application decisions soon!
          </p>

          <div className="flex flex-col items-center mt-8">
            <p className="">Time left before the event:</p>
            <p>
              {days} days {hours} hrs {minutes} min {seconds} sec
            </p>
          </div>
          <a
            className="acp-apply-btn acp-apply-btn-disabled"
            // href="https://forms.gle/NNYzGUh9u6fZu3Cq8"
          >
            Registration form
          </a>
        </div>

        <img
          className="w-2/3"
          src={imageManager("duck_logo").brandImg}
          alt="photo"
        />
      </div>
    </div>
  );
};

export default Registration;
