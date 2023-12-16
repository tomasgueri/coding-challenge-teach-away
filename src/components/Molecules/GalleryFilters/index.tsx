import React, { useState } from 'react';
import styles from './gallery-filters.module.scss';

// Components
import Container from '../../Atoms/Container';

interface GalleryFiltersProps {
  onFilterChange: (filters: any) => void;
}

const GalleryFilters: React.FC<GalleryFiltersProps> = ({ onFilterChange }) => {
  const [section, setSection] = useState('hot');
  const [showViral, setShowViral] = useState(true);
  const [window, setWindow] = useState('day');
  const [sort, setSort] = useState('viral');

  const handleFilterChange = () => {
    onFilterChange({ section, showViral, window, sort });
  };

  return (
    <div className={styles['gallery-filters']}>
      <Container>
        <div className={styles.filtersRight}>
          <div className={styles.selectWrapper}>
            <select
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className={styles.selectElement}
            >
              <option value="hot">Hot</option>
              <option value="top">Top</option>
              <option value="user">User</option>
            </select>
          </div>

          <div>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={showViral}
              onChange={() => setShowViral(!showViral)}
            />
            <span className={styles.slider}></span>
          </label>
          <span>Show Viral</span>
          </div>

          <div className={styles.selectWrapper}>
            <select
              value={window}
              onChange={(e) => setWindow(e.target.value)}
              className={styles.selectElement}
            >
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
              <option value="all">All</option>
            </select>
          </div>

          <div className={styles.selectWrapper}>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className={styles.selectElement}
            >
              <option value="viral">Viral</option>
              <option value="top">Top</option>
              <option value="time">Time</option>
            </select>
          </div>

          <button onClick={handleFilterChange} className={styles.filterButton}>
            Apply Filters
          </button>
        </div>

      </Container>
    </div>
  );
};

export default GalleryFilters;
