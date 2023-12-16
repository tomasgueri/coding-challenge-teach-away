import React, { useState } from 'react';
import styles from './gallery-filters.module.scss';

// Components
import Container from '../../Atoms/Container';
import SelectInput from '../../Atoms/SelectInput';
import Button from '../../Atoms/Buttons';

interface Filters {
  section: string;
  sort: string;
  window: string;
  showViral: boolean;
}

interface GalleryFiltersProps {
  onFilterChange: (filters: Filters) => void;
}

const GalleryFilters: React.FC<GalleryFiltersProps> = ({ onFilterChange }) => {
  const [section, setSection] = useState('hot');
  const [showViral, setShowViral] = useState(true);
  const [window, setWindow] = useState('day');
  const [sort, setSort] = useState('viral');

  const handleFilterChange = () => {
    onFilterChange({ section, sort, window, showViral });
  };

  return (
    <div className={styles['gallery-filters']}>
      <Container>
        <div className={styles.filtersRight}>
          <div>
            <SelectInput
              value={section}
              onChange={(value) => setSection(value)}
              options={[
                { value: 'hot', label: 'Hot' },
                { value: 'top', label: 'Top' },
                { value: 'user', label: 'User' },
              ]}
            />
            <div className={styles.viralInput}>
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
            <SelectInput
              value={window}
              onChange={(value) => setWindow(value)}
              options={[
                { value: 'day', label: 'Day' },
                { value: 'week', label: 'Week' },
                { value: 'month', label: 'Month' },
                { value: 'year', label: 'Year' },
                { value: 'all', label: 'All' },
              ]}
            />
            <SelectInput
              value={sort}
              onChange={(value) => setSort(value)}
              options={[
                { value: 'viral', label: 'Viral' },
                { value: 'top', label: 'Top' },
                { value: 'time', label: 'Time' },
              ]}
            />
          </div>
          <div>
            <Button variant='primary' text='Apply Filters' onClick={handleFilterChange} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GalleryFilters;
