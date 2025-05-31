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
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const cacheName = "favorite-images-cache";

  const saveImageToCache = async (url, id) => {
    const cache = await caches.open(cacheName);
    const response = await fetch(url);
    await cache.put(`/cached/${id}`, response.clone());
  };

  const getCachedImage = async (id) => {
    const cache = await caches.open(cacheName);
    const match = await cache.match(`/cached/${id}`);
    if (match) {
      const blob = await match.blob();
      return URL.createObjectURL(blob);
    }
    return null;
  };
  const toggleFavorite = async (imageObj) => {
    const exists = favorites.find((fav) => fav.id === imageObj.id);
    if (exists) {
      setFavorites(favorites.filter((fav) => fav.id !== imageObj.id));
    } else {
      await saveImageToCache(imageObj.src, imageObj.id);
      setFavorites([...favorites, { id: imageObj.id, alt: imageObj.alt }]);
    }
  };
  const [imageMap, setImageMap] = useState({});

  useEffect(() => {
    const loadCachedImages = async () => {
      const map = {};
      for (const fav of favorites) {
        const objectURL = await getCachedImage(fav.id);
        if (objectURL) {
          map[fav.id] = objectURL;
        }
      }
      setImageMap(map);
    };

    loadCachedImages();
  }, [favorites]);
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
    const updated = favorites.filter((fav) => fav.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };
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
      <div className="background-blur"></div>
      <Navbar />
      <div className="main-content">
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
            element={
              <Favorites
                favorites={favorites}
                imageMap={imageMap}
                removeFavorite={removeFavorite}
              />
            }
          />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
