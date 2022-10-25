import { render, screen } from '@testing-library/react';
import Register from '../pages/routes/register';
import '@testing-library/jest-dom';

it('Home should be rendered', () => {
  render(<Register />);

  const myElement = screen.getByText('Register Page!');
  expect(myElement).toBeInTheDocument();
});
