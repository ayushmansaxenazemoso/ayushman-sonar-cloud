import React from 'react';
import Input from '../../atoms/Input';
import './index.css';

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: any) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, type = 'text', value, onChange }) => {
  return (
    <div className="input-field">
      <label className="label">{label}</label>
      <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;