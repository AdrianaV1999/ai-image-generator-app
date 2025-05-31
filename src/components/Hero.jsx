import React, { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import robotImg from "../assets/robot.png";
import "./Hero.scss";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
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
    <section
      className={`hero-section ${isVisible ? "active" : ""}`}
      ref={sectionRef}
    >
      <div className="hero-content">
        <div className="text-content">
          <h1 className="hero-title">
            Make <span className="gradient-text">Stunning</span> Images Using AI
          </h1>
          <p className="hero-description">
            Create stunning visuals in seconds using the power of artificial
            intelligence — fast, smart and effortless.
          </p>
          <button
            className="generate-button"
            onClick={() => navigate("/generator")}
          >
            <Sparkles size={19} style={{ marginRight: "8px" }} />
            Generate Now
          </button>
        </div>
        <div className="image-container">
          <img src={robotImg} alt="Robot AI" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
