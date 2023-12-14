import React, { useState } from 'react';
import './galleryFilters.module.scss';

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
    <div className="gallery-filters">
      <select value={section} onChange={(e) => setSection(e.target.value)} className="filter-select">
        <option value="hot">Hot</option>
        <option value="top">Top</option>
        <option value="user">User</option>
      </select>
      <label className="filter-label">
        <input
          type="checkbox"
          checked={showViral}
          onChange={(e) => setShowViral(e.target.checked)}
        />
        Show Viral
      </label>
      <button onClick={handleFilterChange} className="filter-button">Apply Filters</button>
    </div>
  );
};

export default GalleryFilters;
