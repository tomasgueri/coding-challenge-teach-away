import React, { useState } from 'react';
import styles from './gallery.module.scss';
import ImageDetailsModal from '../../Molecules/ImageDetailsModal';

type Image = {
  id: string;
  title: string;
  description?: string;
  link: string;
  ups?: number; // Upvotes
  downs?: number; // Downvotes
  score?: number;
};

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.gallery}>
      {images?.map((image) => (
        <div key={image.id} className={styles.imageCard} onClick={() => handleImageClick(image)}>
          <img src={image.link} alt={image.title} className={styles.image} />
          <div className={styles.imageOverlay}>
            <div className={styles.imageTitle}>{image.title}</div>
            <div className={styles.imageDescription}>{image.description}</div>
          </div>
        </div>
      ))}
      {selectedImage && <ImageDetailsModal imageDetails={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
};

export default Gallery;
