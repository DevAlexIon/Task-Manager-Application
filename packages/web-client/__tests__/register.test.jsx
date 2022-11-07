const { render } = require('@testing-library/react');
const { createMemoryHistory } = require('history');
const React = require('react');
const { Router } = require('react-router-dom');

it('works', () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history} />,
  );
});
