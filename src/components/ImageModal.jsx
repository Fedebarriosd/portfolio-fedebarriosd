import React from 'react';
import '../styles/imagemodal.css';

const ImageModal = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <img src={src} alt={alt} className="image-modal-img" />
      </div>
    </div>
  );
};

export default ImageModal;
