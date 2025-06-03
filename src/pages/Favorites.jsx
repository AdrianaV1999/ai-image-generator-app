import React, { useState } from "react";
import "./Favorites.scss";
import { FiX } from "react-icons/fi";
import ImageModal from "../components/ImageModal";

const Favorites = ({ favorites, imageMap, removeFavorite }) => {
  const [modalSrc, setModalSrc] = useState(null);

  return (
    <div className="favorites">
      {favorites.length === 0 ? <p>No favorites yet.</p> : <h2>♡ Favorites</h2>}
      <div className="favorites-list">
        {favorites.map(
          (fav, index) =>
            imageMap[fav.id] && (
              <div key={fav.id} className="favorite-item">
                <img
                  src={imageMap[fav.id]}
                  alt={fav.alt || `Favorite ${index}`}
                  onClick={() => setModalSrc(imageMap[fav.id])}
                />
                <button
                  className="remove-favorite-button"
                  onClick={() => removeFavorite(fav.id)}
                  aria-label={`Remove favorite ${fav.alt || index}`}
                >
                  <FiX className="remove-icon" size={20} color="black" />
                </button>
              </div>
            )
        )}
      </div>

      <ImageModal src={modalSrc} onClose={() => setModalSrc(null)} />
    </div>
  );
};

export default Favorites;
