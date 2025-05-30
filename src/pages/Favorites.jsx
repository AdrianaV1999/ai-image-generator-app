import React, { useState } from "react";
import "./Favorites.scss";

const Favorites = ({ favorites }) => {
  const [modalSrc, setModalSrc] = useState(null);

  return (
    <div className="favorites">
      {favorites.length === 0 ? <p>No favorites yet.</p> : <h2>♡ Favorites</h2>}
      <div className="favorites-list">
        {favorites.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Favorite ${index}`}
            onClick={() => setModalSrc(src)}
          />
        ))}
      </div>

      {modalSrc && (
        <div
          className="modal-overlay"
          onClick={() => setModalSrc(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && setModalSrc(null)}
        >
          <img src={modalSrc} alt="Enlarged favorite" />
        </div>
      )}
    </div>
  );
};

export default Favorites;
