import { render, screen } from '@testing-library/react';
import Home from '../pages/components/home';
import '@testing-library/jest-dom';

it('Home should be rendered', () => {
  render(<Home />);

  const myElement = screen.getByText('Home Page!');
  expect(myElement).toBeInTheDocument();
});
