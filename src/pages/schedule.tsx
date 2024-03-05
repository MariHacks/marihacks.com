import BackArrow from "../components/BackArrow";

function SchedulePage() {
  return (
    <div>
      <div className="p-4 md:p-16 flex flex-col">
        <BackArrow text="Home" link="/" />
        <div className="font-bold text-[32px] md:text-[48px]">
          Here's how MariHacks will go!
        </div>
        <hr className="w-1/3 border border-black my-8" />
        <p className="w-full md:w-1/2 lg:w-1/3">
          MariHacks 7.0 participants are welcome to check-in at the College
          starting at 4 pm on Friday, April 5. The opening ceremony will begin
          at 5 pm, and we expect the closing ceremony on Saturday, April 6 to
          end by 5 pm. The full schedule will be public soon!
        </p>
      </div>
    </div>
  );
}

export default SchedulePage;
