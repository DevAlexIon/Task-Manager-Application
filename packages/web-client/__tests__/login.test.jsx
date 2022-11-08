import { createBrowserHistory } from 'history';

const { render } = require('@testing-library/react');

const React = require('react');
const { Router } = require('react-router-dom');

it('works', () => {
  const newHistory = createBrowserHistory();
  render(
    <Router history={newHistory} />,
  );
});
