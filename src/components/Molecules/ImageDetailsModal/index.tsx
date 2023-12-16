import React from 'react';
import styles from './image-details-modal.module.scss';
import Image from 'next/image';

// Icons
import { FaArrowUp, FaArrowDown, FaStar } from 'react-icons/fa';

// Components
import Button from '../../Atoms/Buttons';

interface ImageDetails {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  ups?: number; // Upvotes
  downs?: number; // Downvotes
  score?: number;
  isVideo?: boolean;
}

interface ImageDetailsModalProps {
  imageDetails: ImageDetails;
  onClose: () => void;
}

const ImageDetailsModal: React.FC<ImageDetailsModalProps> = ({ imageDetails, onClose }) => {
  const {isVideo, imageUrl, title, description, ups, downs, score} = imageDetails;

  return (
    <div className={styles["modal-overlay"]} onClick={onClose}>
      <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
        {isVideo ? (
          <video controls className={styles.modalMedia}>
            <source src={imageUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image src={imageUrl} alt={title} className={styles.modalMedia} width={1500} height={1500} />
        )}

        { title &&
          <h3>{title}</h3>
        }
        { description &&
          <p>{description}</p>
        }
        { (ups || downs || score) &&
          <div className={styles["modal-stats"]}>
            { ups &&
              <span className={styles["upvote"]}><FaArrowUp color="green" title="Upvotes" /> {ups}</span>
            }
            { downs &&
              <span className={styles["downvote"]}><FaArrowDown color="red" title="Downvotes" /> {downs}</span>
            }
            { score &&
              <span className={styles["score"]}><FaStar title="Score" /> {score}</span>
            }
        </div>}
        <Button variant='secondary' text='Close' onClick={onClose} />
      </div>
    </div>
  );
};

export default ImageDetailsModal;
