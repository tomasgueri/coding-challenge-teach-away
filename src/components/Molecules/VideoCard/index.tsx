import React from 'react';
import styles from './video-card.module.scss'; // Update with your actual path to the SASS file

interface VideoCardProps {
  id: string;
  title: string;
  description?: string;
  videoUrl: string;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ id, title, description, videoUrl, onClick }) => {
  console.log('videoUrl', videoUrl)
  return (
    <div key={id} className={styles.videoCard} onClick={onClick}>
      <video className={styles.video} controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.videoOverlay}>
        <div className={styles.videoTitle}>{title}</div>
        <div className={styles.videoDescription}>{description}</div>
      </div>
    </div>
  );
};

export default VideoCard;
