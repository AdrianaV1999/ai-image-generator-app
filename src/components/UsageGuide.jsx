import React, { useEffect, useRef, useState } from "react";
import "./UsageGuide.scss";
import usageImg from "../assets/guide-book.png";

const UsageGuide = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const steps = [
    {
      title: "Enter Prompt",
      desc: "Write a description of the image you want to generate (e.g., 'a futuristic city at sunset').",
    },
    {
      title: "Choose Settings",
      desc: "Select the image style, aspect ratio and number of images to generate.",
    },
    {
      title: "Generate",
      desc: "Click the Generate button to create your images using AI.",
    },
    {
      title: "Download",
      desc: "Once you're happy with the result, download your image in high quality.",
    },
    {
      title: "Add to Favorites",
      desc: "Optionally, save the image to your favorites for later access.",
    },
  ];

  return (
    <section className={`usage ${isVisible ? "active" : ""}`} ref={sectionRef}>
      <div className="usage-text">
        <h2>How to Use the App</h2>
        <ul className="usage-list">
          {steps.map((item, index) => (
            <li key={index} className="usage-item">
              <div className="circle">{index + 1}</div>

              <div className="usage-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="usage-image">
        <img src={usageImg} alt="How to Use the App" />
      </div>
    </section>
  );
};

export default UsageGuide;
