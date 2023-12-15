// ImageCard.tsx
import React from 'react';
import Image from 'next/image';
import styles from './cards.module.scss';

interface ImageCardProps {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ id, title, description, imageUrl, onClick }) => {
  return (
    <div key={id} className={styles.card} onClick={onClick}>
      <Image
        src={imageUrl}
        alt={title}
        className={styles.image}
        width={150}
        height={300}
        layout="responsive"
      />
      <div className={styles.infoOverlay}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default ImageCard;
