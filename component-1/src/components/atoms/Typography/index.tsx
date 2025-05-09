import React from 'react';
import './index.css';

interface TypographyProps {
  heading: string;
  subtext: string;
  size?: 'small' | 'medium' | 'large'; 
}

const Typography: React.FC<TypographyProps> = ({ heading, subtext, size = 'medium' }) => {
  return (
    <div className={`text-block ${size}`}>
      <h2 className={`heading ${size}`}>{heading}</h2>
      <p className={`subtext ${size}`}>{subtext}</p>
    </div>
  );
};

export default Typography;
