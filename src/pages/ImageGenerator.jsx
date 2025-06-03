import React, { useState } from "react";
import "./ImageGenerator.scss";
import { FiHeart } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import ImageModal from "../components/ImageModal";

const API_URL = "https://api.vyro.ai/v2/image/generations";
const API_TOKEN = process.env.REACT_APP_IMAGINE_ART_KEY;

const ImageGenerator = ({ favorites, toggleFavorite }) => {
  const [prompt, setPrompt] = useState(
    "A futuristic cityscape at night with neon lights"
  );
  const [style, setStyle] = useState("anime");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [imageSrcList, setImageSrcList] = useState([]);
  const [numImages, setNumImages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalSrc, setModalSrc] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setImageSrcList([]);

    try {
      const images = [];

      for (let i = 0; i < numImages; i++) {
        const formData = new FormData();
        formData.append("prompt", prompt);
        formData.append("style", style);
        formData.append("aspect_ratio", aspectRatio);

        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to generate image");
        }

        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        images.push(imageUrl);
      }

      setImageSrcList(images);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="image-generator">
      <h1>AI Image Generator</h1>

      <div className="form-group">
        <label>Description:</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={3}
          placeholder="Enter image description..."
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Style:</label>
          <select value={style} onChange={(e) => setStyle(e.target.value)}>
            <option value="anime">Anime</option>
            <option value="flux-schnell">Flux Schnell</option>
            <option value="flux-dev">Flux Dev</option>
            <option value="imagine-turbo">Imagine Turbo</option>
            <option value="realistic">Realistic</option>
            <option value="sdxl-1.0">SDXL 1.0</option>
          </select>
        </div>

        <div className="form-group">
          <label>Aspect Ratio:</label>
          <select
            value={aspectRatio}
            onChange={(e) => setAspectRatio(e.target.value)}
          >
            <option value="1:1">1:1 (Square)</option>
            <option value="3:2">3:2</option>
            <option value="4:3">4:3</option>
            <option value="3:4">3:4</option>
            <option value="16:9">16:9</option>
            <option value="9:16">9:16</option>
          </select>
        </div>

        <div className="form-group">
          <label>Count:</label>
          <select
            value={numImages}
            onChange={(e) => setNumImages(Number(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
      </div>

      <button
        className="button-generate"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {error && <div className="error">{error}</div>}

      {imageSrcList.length > 0 && (
        <div className={`image-result image-count-${imageSrcList.length}`}>
          {imageSrcList.map((src, index) => (
            <div key={index} className="image-wrapper">
              <img
                src={src}
                alt={`Generated ${index}`}
                onClick={() => setModalSrc(src)}
              />
              <a
                href={src}
                download={`image-${index + 1}.png`}
                className="download-icon"
                title="Download"
              >
                <FiDownload />
              </a>

              <button
                className="favorite-icon"
                onClick={() =>
                  toggleFavorite({
                    id: src,
                    src: src,
                    alt: `Generated image`,
                  })
                }
                aria-label="Toggle Favorite"
              >
                {favorites.some((fav) => fav.id === src) ? (
                  <FaHeart className="heart-icon" color="red" />
                ) : (
                  <FiHeart className="heart-icon" color="white" />
                )}
              </button>
            </div>
          ))}
        </div>
      )}
      <ImageModal src={modalSrc} onClose={() => setModalSrc(null)} />
    </div>
  );
};

export default ImageGenerator;
