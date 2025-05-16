import { render, screen } from '@testing-library/react';
import SliderComponent from './index';

test('renders slider', () => {
  render(<SliderComponent />);
  const slider = screen.getByRole('slider');
  expect(slider).toBeInTheDocument();
});