import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageIcon from './index';
import '@testing-library/jest-dom';

describe('ImageIcon component', () => {
  it('renders the image with correct src and alt', () => {
    const src = 'google.png'; 
    const alt = 'Google logo';

    render(<ImageIcon src={src} alt={alt} />);
    
    const image = screen.getByAltText(alt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining(src));
    expect(image).toHaveAttribute('alt', alt);
  });
});
