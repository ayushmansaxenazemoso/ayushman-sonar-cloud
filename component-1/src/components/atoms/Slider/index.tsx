import React, { useState } from 'react';
import { Slider } from '@mui/material';

const SliderComponent = () => {
  const [value, setValue] = useState(30);

  return (
    <Slider
      value={value}
      onChange={(_, newValue) => setValue(newValue as number)}
      aria-label="slider"
    />
  );
};

export default SliderComponent;