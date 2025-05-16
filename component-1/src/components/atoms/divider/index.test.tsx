// DividerComponent.test.tsx
import { render, screen } from '@testing-library/react';
import DividerComponent from './index';

test('renders divider', () => {
  render(<DividerComponent />);
  expect(screen.getByTestId('divider')).toBeInTheDocument();
});
