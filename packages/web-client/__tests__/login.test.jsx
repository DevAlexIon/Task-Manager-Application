import { render, screen } from '@testing-library/react';
import Login from '../pages/routes/login';
import '@testing-library/jest-dom';

it('Home should be rendered', () => {
  render(<Login />);

  const myElement = screen.getByText('Login Page!');
  expect(myElement).toBeInTheDocument();
});
