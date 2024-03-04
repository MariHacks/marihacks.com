import BackArrow from "../components/BackArrow";

function SchedulePage() {
  return (
    <div>
      <div className="p-4 md:p-16 flex flex-col">
        <BackArrow text="Home" link="/" />
        <div className="font-bold text-[32px] md:text-[48px]">
          Here's how Marihacks will go!
        </div>
        <hr className="w-1/3 border border-black my-8" />
        Schedule will be public soon!
      </div>
    </div>
  );
}

export default SchedulePage;
