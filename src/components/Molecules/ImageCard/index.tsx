// ImageCard.tsx
import React from 'react';
import Image from 'next/image';
import styles from './image-card.module.scss'; // Update with your actual path to the SASS file

interface ImageCardProps {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ id, title, description, imageUrl, onClick }) => {
  return (
    <div key={id} className={styles.imageCard} onClick={onClick}>
      <Image
        src={imageUrl}
        alt={title}
        className={styles.image}
        width={150}
        height={300}
        layout="responsive"
      />
      <div className={styles.imageOverlay}>
        <div className={styles.imageTitle}>{title}</div>
        <div className={styles.imageDescription}>{description}</div>
      </div>
    </div>
  );
};

export default ImageCard;
