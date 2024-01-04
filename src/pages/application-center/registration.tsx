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
    console.log("HELLO");
  }, []);

  setInterval(() => {
    if (seconds !== 0) {
      countdown();
    }
  }, 1000);

  return (
    <div className="acp-container">
      <BackArrow text="Application center" link="/application-center" />
      <div className="acp-card-bg mx-auto lg:w-1/2 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="font-bold acp-title">Register</p>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            explicabo maiores velit quasi, nobis minima qui, aliquam minus vitae
            dicta commodi ad, vel eius totam vero quam cum molestiae nemo!
          </p>

          <div className="mt-8">
            {days} days {hours} hrs {minutes} min {seconds} sec
          </div>
          <a className="acp-apply-btn-disabled">Registration disabled</a>
        </div>

        <img
          className="w-2/3"
          src={imageManager("duck_logo").brandImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Registration;
