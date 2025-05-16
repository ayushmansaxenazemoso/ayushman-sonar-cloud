import React from 'react';
import { Typography as Typ, TypographyProps as MuiTypographyProps } from '@mui/material';

interface CustomTypographyProps {
  heading: string;
  size?: 'small' | 'medium' | 'large';
}

const sizeToVariantMap: Record<'small' | 'medium' | 'large', MuiTypographyProps['variant']> = {
  small: 'body2',
  medium: 'body1',
  large: 'h6',
};

const Typography: React.FC<CustomTypographyProps> = ({ heading, size = 'medium' }) => {
  const variant = sizeToVariantMap[size];

  return (
    <Typ variant={variant} data-testid="typography">
      {heading}
    </Typ>
  );
};

export default Typography;
