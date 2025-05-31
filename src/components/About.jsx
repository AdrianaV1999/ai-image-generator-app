import React, { useEffect, useRef, useState } from "react";
import "./About.scss";
import about from "../assets/about.png";

const About = () => {
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

  return (
    <section className={`about ${isVisible ? "active" : ""}`} ref={sectionRef}>
      <div className="about-content">
        <div className="about-image">
          <img src={about} alt="AI Maker" />
        </div>
        <div className="about-text">
          <h2>
            About <span className="gradient-text">AI Image Maker:</span>{" "}
            <br></br>Turning Ideas into Visuals
          </h2>
          <p>
            AI Image Maker is an advanced tool that transforms text prompts into
            visually compelling images using cutting-edge artificial
            intelligence. Designed for artists, creators, and innovators, it
            enables rapid image generation with precision and creativity. By
            merging technology with imagination, AI Image Maker opens new
            possibilities in digital art, design, and visual storytelling!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
