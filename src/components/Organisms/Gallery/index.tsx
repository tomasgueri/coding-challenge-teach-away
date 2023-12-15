import React, { useState, useEffect} from 'react';
import styles from './gallery.module.scss';

// Components
import ImageDetailsModal from '../../Molecules/ImageDetailsModal';
import ImageCard from '../../Molecules/Cards/ImageCard';
import VideoCard from '../../Molecules/Cards/VideoCard';
import Skeleton from '../../Molecules/Skeleton';

type Image = {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  images: any[];
  ups?: number; // Upvotes
  downs?: number; // Downvotes
  score?: number;
};

interface GalleryProps {
  data: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [media, setMedia] = useState(data || []);

  const handleImageClick = (image: Image) => {
    console.log('selected image', image)
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    console.log('se ejecuto setMedia')
    setMedia(data)
    console.log('data inside useEffect', data)
  }, [data])

  console.log('data', data)
  console.log('media', media)

  return (
    <div className={styles.gallery}>
      { media ?
        data.map((item) => {
          // Check if the item is an image or a video
          const isVideo = item.images[0]?.type?.includes('video');

          console.log('item', item);
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
        })
      :
        <Skeleton />
      }

      {selectedImage && <ImageDetailsModal imageDetails={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
};

export default Gallery;
