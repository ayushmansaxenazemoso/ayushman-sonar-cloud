import React from 'react';
import { render, screen } from '@testing-library/react';
import Typography from './index';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material'; 

const defaultTheme = createTheme(); 

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>);
};

describe('Typography Component', () => {
    
  it('should render the heading text', () => {
    const headingText = 'Test Heading';
    renderWithTheme(<Typography heading={headingText} />);
    const typographyElement = screen.getByTestId('typography');
    expect(typographyElement).toHaveTextContent(headingText);
  });

  it('should render with the default size (medium)', () => {
    renderWithTheme(<Typography heading="Default Size Heading" />);
    const typographyElement = screen.getByTestId('typography');
    expect(typographyElement).toHaveClass('MuiTypography-body1');
  });

  it('should render with the "small" size', () => {
    renderWithTheme(<Typography heading="Small Heading" size="small" />);
    const typographyElement = screen.getByTestId('typography');
    expect(typographyElement).toHaveClass('MuiTypography-body2');
  });

  it('should render with the "large" size', () => {
    renderWithTheme(<Typography heading="Large Heading" size="large" />);
    const typographyElement = screen.getByTestId('typography');
    expect(typographyElement).toHaveClass('MuiTypography-h6');
  });
});