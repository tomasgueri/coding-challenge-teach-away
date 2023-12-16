import React, { useRef } from 'react';
import styles from './cards.module.scss';

interface VideoCardProps {
  id: string;
  title: string;
  description?: string;
  videoUrl: string;
  tags: any[];
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ id, title, description, videoUrl, tags, onClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset the video to start
    }
  };

  return (
    <div
      key={id}
      className={`${styles.card} ${styles.videoCard}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video className={styles.video} muted loop ref={videoRef}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.infoOverlay}>
        { title && <div className={styles.title}>{title}</div> }
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

export default VideoCard;
