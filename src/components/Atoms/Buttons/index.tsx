import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', text, onClick }) => {
  return (
    <button
      className={`${styles.button} ${variant === 'primary' ? styles.primary : styles.secondary}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
