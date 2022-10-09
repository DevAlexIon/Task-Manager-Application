import { render, screen } from '@testing-library/react';
import Register from '../pages/components/register';
import '@testing-library/jest-dom';

it('Home should be rendered', () => {
  render(<Register />);

  const myElement = screen.getByText('Register Page!');
  expect(myElement).toBeInTheDocument();
});
