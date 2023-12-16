// ImageCard.tsx
import React from 'react';
import Image from 'next/image';
import styles from './cards.module.scss';

// Lazy loading
import { useInView } from 'react-intersection-observer';

interface ImageCardProps {
  id: string;
  title: string;
  description?: string;
  tags: any[];
  imageUrl: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ id, title, description, imageUrl, tags, onClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '100px',
  });

  return (
    <div data-testid={`image-card-${id}`} ref={ref} key={id} className={`${styles.card} ${styles.imageCard}`} onClick={onClick}>
      {inView && (
        <div style={{ minHeight: '100%', position: 'relative' }}>
          <Image
            src={imageUrl}
            alt={title}
            className={styles.image}
            objectFit="cover"
            width={600}
            height={400}
          />
        </div>
      )}
      <div className={styles.infoOverlay}>
        {title && <div className={styles.title}>{title}</div> }
        { description && <div className={styles.description}>{description}</div> }
        { tags.length > 0 &&
          <div className={styles.tagsContainer}>
            {tags.slice(0, 4).map((tag, index) => (
              <span key={index} className={styles.tag}>{tag.name}</span>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default ImageCard;
