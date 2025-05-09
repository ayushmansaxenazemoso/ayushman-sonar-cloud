import React from 'react';
import './index.css';

interface ImageIconProps {
  src: string;
  alt: string;
}

const ImageIcon: React.FC<ImageIconProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="login-icon" />;
};

export default ImageIcon;