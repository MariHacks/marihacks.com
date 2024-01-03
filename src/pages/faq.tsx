import "../css/faq.css";

import { FaCaretDown, FaCaretRight } from "react-icons/fa6";

import { useState } from "react";

const FaqCard = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <div className="faq-card my-2" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="flex items-center justify-between md:text-[24px]">
        <p className="boldText">{question}</p>
        {isExpanded ? <FaCaretDown /> : <FaCaretRight />}
      </div>
      {isExpanded ? <p className="faq-answer">{answer}</p> : null}
    </div>
  );
};

const Faq = () => {
  // To put on a seperate file
  const faqColOne: { question: string; answer: string }[] = [
    {
      question: "What is a hackathon?",
      answer:
        "A hackathon is where you turn your crazy ideas into real stuff. It is an event where beginner and experienced hackers gather together to work on innovative solutions to real-world problems. At MariHacks, you can look forward to amazing guest speakers, helpful workshops, skilled mentors and, of course, awesome hacking!",
    },
    {
      question: "How much does it cost?",
      answer:
        "Nothing! The entire event will be held in-person and all you need to participate is a computer.",
    },
    {
      question: "What if I don't know how to code?",
      answer:
        "Then you've come to the right place! We will have great workshops for beginners as well as experienced mentors to get your started on your coding journey.",
    },
    {
      question: "Who can apply?",
      answer: "Any High School, CEGEP, and U0 students is eligible to apply!",
    },
  ];

  const faqColTwo: { question: string; answer: string }[] = [
    {
      question: "How many hackers per team?",
      answer:
        "Teams have a maximum of 4 members. You can select your teammates when you register or you can register individually without specified teammates.",
    },

    {
      question: "What if I don't have a team?",
      answer:
        "Don't worry! We will have team formation sessions at the beginning of MariHacks so you can find some teammates!",
    },

    {
      question: "Where is the location?",
      answer:
        "Last year, the event was held virtual because of COVID restrictions. This 6th edition of MariHacks will be in person at Marianopolis College so you can get the best hacking experience!",
    },
    {
      question: "When will applications close?",
      answer:
        "Applications will open soon, so stay tuned! If you have some of your team members who did not get their Eventbrite ticket, send us an email at team@marihacks.com.",
    },
  ];
  const faqColThree: { question: string; answer: string }[] = [
    {
      question: "I'm interested in judging!",
      answer: "",
    },
    {
      question: "I'm interested in presenting a workshop!",
      answer: "",
    },
    {
      question: "I'm interested in mentoring!",
      answer: "",
    },

    { question: "I still have a question...", answer: "" },
  ];

  return (
    <div className="flex flex-col items-center">
      <hr className="w-1/4 border border-black my-4 md:my-8" />

      <div className="w-full flex md:flex-row flex-col">
        <div className="faq-col">
          {faqColOne.map((faq) => {
            return <FaqCard question={faq.question} answer={faq.answer} />;
          })}
        </div>
        <div className="faq-col">
          {faqColTwo.map((faq) => {
            return <FaqCard question={faq.question} answer={faq.answer} />;
          })}
        </div>
        <div className="faq-col">
          {faqColThree.map((faq) => {
            return <FaqCard question={faq.question} answer={faq.answer} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
