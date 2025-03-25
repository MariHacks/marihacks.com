import { useEffect, useState } from "react";

import BackArrow from "../../components/BackArrow";
import { imageManager } from "../../helper/ressourceManagers";

const Registration = () => {
  // monthIndex = month - 1
  const mariHacksEventDate = new Date(2025, 2, 24, 23, 59, 59);

  /*
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

  */
  return (
    <div className="acp-container">
      <BackArrow text="Home" link="/" />
      <div className="acp-card-bg mx-auto lg:w-1/2 flex flex-col items-center">
        <div className="flex flex-col items-center text-center">
          {/*
          <p className="font-bold acp-title">Register</p>
          <p className="font-bold">Welcome to MariHacks VIII!</p>
          <p className="my-4">
            Registration for MariHacks 8.0 isn't open yet! Thanks for coming by,
            and stay tuned for updates!
          </p>
          <p>
            Don't forget to follow us on Instagram (@marihacks)! You can also
            reach out to our team through team@marihacks.com.
          </p>
          */}
          <p className="font-bold">Welcome to MariHacks VIII!</p>
          <p className="my-4">
            We're thrilled to invite all Cegep and high school students to join
            us for a memorable hackathon experience on{" "}
            <span className="font-bold">April 4-5<sup>th</sup>, 2025</span>. MariHacks is an
            opportunity for young minds to come together, push boundaries, and
            turn their creative ideas into reality!
          </p> 
          <div className="flex flex-col items-center mt-8">

            <p> Registration is over!</p>
            {/*
            <p> Time left for registration:</p>
            <p>
              {days} days {hours} hrs {minutes} min {seconds} sec
            </p>
            */}
          </div>
          <a
            // to disable style: 
            // to diseable clicking: 
            className="acp-apply-btn acp-btn-disabled-styles acp-btn-disabled-position"
            href="https://forms.gle/PPXaBdkQQwtwuJRLA"
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
