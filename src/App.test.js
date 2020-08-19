import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const createElement = getByText(/Hello World from createElement/i);
  const component = getByText(/Hello World Component!/i);
  const pureComponent = getByText(/Hello World PureComponent!/i);
  const functional = getByText(/Hello World Functional!/i);
  expect(createElement).toBeInTheDocument();
  expect(component).toBeInTheDocument();
  expect(pureComponent).toBeInTheDocument();
  expect(functional).toBeInTheDocument();
});
