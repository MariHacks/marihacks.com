import BackArrow from "../components/BackArrow";

function SchedulePage() {
  return (
    <div>
      <div className="p-4 md:p-8">
        <BackArrow text="Home" link="/" />
      </div>

      <div className="flex flex-col items-center">
        {/* <div className="font-bold text-[32px] md:text-[48px]">
          Here's how MariHacks will go!
        </div> */}
        <hr className="w-1/3 border border-black my-8" />
        {/* TODO(2027): fill in the check-in / closing-ceremony dates once confirmed. */}
        <p className="w-full md:w-1/2">
          MariHacks 10.0 is coming in 2027! The exact dates and full schedule
          will be announced soon — stay tuned!
        </p>
        {/* <div className="">
          <a
            className="underline hover:text-blue-400"
            href="/pdfs/event_schedule.pdf"
          >
            Click me
          </a>
          <span> to download the pdf of the the schedule.</span>
        </div>
        <img className="w-2/5 my-8" src="/images/event_schedule.png" alt="" /> */}
      </div>
    </div>
  );
}

export default SchedulePage;
