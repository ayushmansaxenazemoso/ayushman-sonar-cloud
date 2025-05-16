import React from 'react';
import './index.css';
import { Typography } from '@mui/material';


interface PairTypographyProps {
  heading: string;
  subtext?: string;
  size?: 'small' | 'medium' | 'large'; 
}

const PairTypography: React.FC<PairTypographyProps> = ({ heading, subtext, size = 'medium' }) => {
  return (
    <div className={`text-block ${size}`}>
      <Typography className={`heading ${size}`}>{heading}</Typography>
      <Typography className={`subtext ${size}`}>{subtext}</Typography>
    </div>
  );
};

export default PairTypography;
