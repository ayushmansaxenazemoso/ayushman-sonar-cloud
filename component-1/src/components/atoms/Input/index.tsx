import React from 'react';
import './index.css';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;