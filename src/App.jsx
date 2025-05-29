import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import ImageGenerator from "./pages/ImageGenerator";
import Favorites from "./pages/Favorites";
import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";
import { useEffect, useRef } from "react";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="App">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="bg-video"
      >
        <source src="/galaxy.mp4" type="video/mp4" />
      </video>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<ImageGenerator />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
