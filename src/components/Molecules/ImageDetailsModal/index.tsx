import React from 'react';
import './image-details-modal.module.scss';
import Image from 'next/image';

interface ImageDetails {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  ups?: number; // Upvotes
  downs?: number; // Downvotes
  score?: number;
}

interface ImageDetailsModalProps {
  imageDetails: ImageDetails;
  onClose: () => void;
}

const ImageDetailsModal: React.FC<ImageDetailsModalProps> = ({ imageDetails, onClose }) => {
  console.log('imageDetails', imageDetails)
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Image src={imageDetails.imageUrl} alt={imageDetails.title} className="modal-image" width={150} height={300} />
        <h3>{imageDetails.title}</h3>
        <p>{imageDetails.description}</p>
        <div className="modal-stats">
          <span>Upvotes: {imageDetails.ups}</span>
          <span>Downvotes: {imageDetails.downs}</span>
          <span>Score: {imageDetails.score}</span>
        </div>
        <button onClick={onClose} className="modal-close">Close</button>
      </div>
    </div>
  );
};

export default ImageDetailsModal;
