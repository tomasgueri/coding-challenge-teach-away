import React, { useState } from 'react';
import styles from './gallery-filters.module.scss';

// Components
import Container from '../../Atoms/Container';

interface GalleryFiltersProps {
  onFilterChange: (filters: any) => void; // Replace 'any' with a more specific type as per your filter structure
}

const GalleryFilters: React.FC<GalleryFiltersProps> = ({ onFilterChange }) => {
  const [section, setSection] = useState<string>('hot');
  const [showViral, setShowViral] = useState<boolean>(true);

  const handleFilterChange = () => {
    onFilterChange({ section, showViral });
  };

  return (
    <div className={styles["gallery-filters"]}>
      <Container>
        <select value={section} onChange={(e) => setSection(e.target.value)} className={styles["filter-select"]}>
          <option value="hot">Hot</option>
          <option value="top">Top</option>
          <option value="user">User</option>
        </select>
        <label className={styles["filter-label"]}>
          <input
            type="checkbox"
            checked={showViral}
            onChange={(e) => setShowViral(e.target.checked)}
          />
          Show Viral
        </label>
        <button onClick={handleFilterChange} className={styles["filter-button"]}>Apply Filters</button>
      </Container>
    </div>
  );
};

export default GalleryFilters;
