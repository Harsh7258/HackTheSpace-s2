"use client";
import React, { useState } from "react";

import FAQsQuesComp from "./faqsQuestions";
import { faqsQuestions } from "../../config/questions";
import Heading from "../Heading";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const FAQsColComponent = ({ children }) => {
  return <div className="faqs--col">{children}</div>;
};

const FAQsSection = () => {
  const { data } = faqsQuestions;
  const [toggle, setToggle] = useState(null);

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [40, 0]);

  return (
    <section ref={container} className="faqs--section">
      <div className="faqs--text">
        <div className="faqs--text__container">
          <h1 className="faqs--text__shadow">FAQs</h1>
          <Heading className="faqs--text__heading">FAQs</Heading>
        </div>
      </div>
      <div className="faqs--questions">
        {data.map((q) => (
          <FAQsColComponent key={q.id}>
            {q.Questions.map((ques) => (
              <FAQsQuesComp
                key={ques.id}
                Question={ques.Q}
                Answer={ques.A}
                isOpen={toggle === ques.id}
                handleToggle={() =>
                  toggle === ques.id ? setToggle(null) : setToggle(ques.id)
                }
              />
            ))}
          </FAQsColComponent>
        ))}
      </div>
      <motion.div style={{ height }} className="circleContainer">
        <div className="circle"></div>
      </motion.div>
    </section>
  );
};

export default FAQsSection;
