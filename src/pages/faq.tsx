import "../css/faq.css";

import { AnimatePresence, motion } from "framer-motion";
import { FaCaretDown, FaCaretRight } from "react-icons/fa6";
import { faqColOne, faqColThree, faqColTwo } from "../docs/faq";

import { useState } from "react";

const FaqCard = ({
  question,
  answer,
  isExpanded,
  onClick,
}: {
  question: string;
  answer: string;
  isExpanded: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="faq-card my-2" onClick={onClick}>
      <div className="flex items-center justify-between md:text-[24px] transition-all">
        <p className="font-bold">{question}</p>
        {isExpanded ? <FaCaretDown /> : <FaCaretRight />}
      </div>

      {isExpanded ? (
        <AnimatePresence mode={"wait"}>
          <motion.div
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              type: "tween",
              duration: 0.5,
            }}
            variants={{
              initialState: {
                opacity: 0,
              },
              animateState: {
                opacity: 1,
              },
              exitState: {
                opacity: 0,
              },
            }}
          >
            <p className="faq-answer">{answer}</p>
          </motion.div>
        </AnimatePresence>
      ) : null}
    </div>
  );
};

const Faq = () => {
  const [expandedIndex, setActiveIndex] = useState<number | null>(null);

  const onFaqExpand = (index: number) => {
    if (index === expandedIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <hr className="w-1/4 border border-black my-4 md:my-8" />
      <div className="w-full flex lg:flex-row flex-col">
        <div className="faq-col">
          {faqColOne.map((faq, key) => {
            return (
              <FaqCard
                key={key}
                question={faq.question}
                answer={faq.answer}
                isExpanded={faq.index === expandedIndex}
                onClick={() => onFaqExpand(faq.index)}
              />
            );
          })}
        </div>
        <div className="faq-col">
          {faqColTwo.map((faq, key) => {
            return (
              <FaqCard
                key={key}
                question={faq.question}
                answer={faq.answer}
                isExpanded={faq.index === expandedIndex}
                onClick={() => onFaqExpand(faq.index)}
              />
            );
          })}
        </div>
        <div className="faq-col">
          {faqColThree.map((faq, key) => {
            return (
              <FaqCard
                key={key}
                question={faq.question}
                answer={faq.answer}
                isExpanded={faq.index === expandedIndex}
                onClick={() => onFaqExpand(faq.index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
