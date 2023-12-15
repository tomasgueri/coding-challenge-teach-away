import React, { useState } from 'react';
import styles from './gallery.module.scss';
import ImageDetailsModal from '../../Molecules/ImageDetailsModal';
import Image from 'next/image';

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
          <Image src={image.link} alt={image.title} className={styles.image} width={150} height={300} />
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
