import React from 'react';
import styles from './skeleton.module.scss';

const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonItem}></div>
      <div className={styles.skeletonItem}></div>
      <div className={styles.skeletonItem}></div>
      <div className={styles.skeletonItem}></div>
    </div>
  );
};

export default Skeleton;
