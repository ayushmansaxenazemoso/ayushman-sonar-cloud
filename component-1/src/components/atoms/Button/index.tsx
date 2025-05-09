import React from 'react';
import './index.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  size?:'small' | 'medium' | 'large'
  color?:string
}

const Button: React.FC<ButtonProps> = ({ text, onClick,  size, color }) => {
  return (
    <button className={`button ${size}`} onClick={onClick} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

export default Button;