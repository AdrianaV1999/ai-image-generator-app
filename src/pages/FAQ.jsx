import React, { useState } from "react";
import "./FAQ.scss";

const faqData = [
  {
    question: "How long does it take to generate an image?",
    answer:
      "It usually takes a few seconds, depending on the selected style. Some models like 'imagine-turbo' are faster, while others like 'sdxl-1.0' and 'realistic' might take a bit more time.",
  },
  {
    question: "Why do my images sometimes look different from what I expected?",
    answer:
      "AI-generated images can vary based on prompt wording, selected style, and aspect ratio. Try adjusting your prompt or using a different style for better results.",
  },
  {
    question: "What kind of prompts work best?",
    answer:
      "Be specific and descriptive. Mention details like style, lighting, mood, subject, or background for better results. Example: 'A futuristic city at sunset, in anime style.'",
  },

  {
    question: "What if my image generation fails?",
    answer:
      "If a generation fails, it might be due to server load, invalid prompt input, or an unsupported combination of options. Try again or adjust your settings.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{item.question}</span>
              <span className="arrow">&#9656;</span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`faq-answer ${activeIndex === index ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
