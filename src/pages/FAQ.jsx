import React, { useState } from "react";
import "./FAQ.scss";

const faqData = [
  {
    question: "What image styles can I generate?",
    answer:
      "Available styles include: realistic, anime, flux-schnell, flux-dev, flux-dev-fast, sdxl-1.0 and imagine-turbo.",
  },
  {
    question: "What aspect ratios are supported?",
    answer:
      "Supported aspect ratios are: 1:1, 3:2, 4:3, 3:4, 16:9, and 9:16 to fit various needs.",
  },
  {
    question: "How many images can I generate at once?",
    answer: "You can generate up to 4 images in a single generation attempt.",
  },
  {
    question: "How do I select a style or ratio for image generation?",
    answer:
      "When submitting your request, choose your preferred style from the available styles and select one of the supported aspect ratios before generating the images.",
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
