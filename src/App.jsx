import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import ImageGenerator from "./pages/ImageGenerator";
import Favorites from "./pages/Favorites";
import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (src) => {
    if (favorites.includes(src)) {
      setFavorites(favorites.filter((fav) => fav !== src));
    } else {
      setFavorites([...favorites, src]);
    }
  };
  console.log(localStorage.getItem("favorites"));

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
      </video>{" "}
      <div className="background-blur"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/generator"
          element={
            <ImageGenerator
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} />}
        />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
