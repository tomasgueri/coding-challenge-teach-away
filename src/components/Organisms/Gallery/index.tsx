import React, { useState } from 'react';
import styles from './gallery.module.scss';
import ImageDetailsModal from '../../Molecules/ImageDetailsModal';
import ImageCard from '../../Molecules/ImageCard';
import VideoCard from '../../Molecules/VideoCard';

type Image = {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  type?: string;
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
      {images?.map((item) => {
        // Check if the item is an image or a video
        const isVideo = item.type?.includes('video');

        return isVideo ? (
          <VideoCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            videoUrl={item.imageUrl}
            onClick={() => handleImageClick(item)}
          />
        ) : (
          <ImageCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            onClick={() => handleImageClick(item)}
          />
        );
      })}

      {selectedImage && <ImageDetailsModal imageDetails={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
};

export default Gallery;
