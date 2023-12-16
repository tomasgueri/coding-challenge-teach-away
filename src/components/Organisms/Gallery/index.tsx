import React, { useState } from 'react';
import styles from './gallery.module.scss';

// Components
import ImageDetailsModal from '../../Molecules/ImageDetailsModal';
import ImageCard from '../../Molecules/Cards/ImageCard';
import VideoCard from '../../Molecules/Cards/VideoCard';

type Tag = {
  name?: string;
};

type Image = {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  tags?: Tag[];
  ups?: number; // Upvotes
  downs?: number; // Downvotes
  score?: number;
  isVideo?: boolean;
};

interface GalleryProps {
  data: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleImageClick = (image: Image) => {
    // Create a new object with all properties of the item plus the isVideo property
    const isVideo = image.imageUrl.includes('mp4');
    const imageWithVideoInfo = {
      ...image,
      isVideo: isVideo,
    };

    setSelectedImage(imageWithVideoInfo);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.gallery}>
      {data.map((item) => {
        // Check if the item is an image or a video
        const isVideo = item.imageUrl.includes('mp4');

        return isVideo ? (
          <VideoCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            videoUrl={item.imageUrl}
            tags={item.tags}
            onClick={() => handleImageClick(item)}
          />
        ) : (
          <ImageCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            tags={item.tags}
            onClick={() => handleImageClick(item)}
          />
        );
      })
      }

      {selectedImage && <ImageDetailsModal imageDetails={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
};

export default Gallery;
