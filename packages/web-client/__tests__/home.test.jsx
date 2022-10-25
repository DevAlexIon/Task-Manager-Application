import { render, screen } from '@testing-library/react';
import Home from '../pages/routes/home';
import '@testing-library/jest-dom';

it('Home should be rendered', () => {
  render(<Home />);

  const myElement = screen.getByText('Home Page!');
  expect(myElement).toBeInTheDocument();
});
