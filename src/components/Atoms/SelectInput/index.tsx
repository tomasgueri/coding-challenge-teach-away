// SelectInput.tsx
import React from 'react';
import styles from './select-input.module.scss';

// React icons
import { FaCaretDown } from 'react-icons/fa';

interface SelectInputProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  className?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ value, onChange, options, className }) => {
  return (
    <div className={`${styles.selectWrapper} ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.selectElement}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <FaCaretDown className={styles.icon} />
    </div>
  );
};

export default SelectInput;
