import React, { useRef } from 'react';
import styles from './cards.module.scss';

interface VideoCardProps {
  id: string;
  title: string;
  description?: string;
  videoUrl: string;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ id, title, description, videoUrl, onClick }) => {
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

  console.log('videoUrl', videoUrl)
  return (
    <div
      key={id}
      className={styles.card}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video className={styles.video} muted loop ref={videoRef}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.infoOverlay}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default VideoCard;
