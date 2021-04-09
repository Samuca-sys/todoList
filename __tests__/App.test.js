import React from "react";
import App from '../src/components/wrappers/App'
import renderer from 'react-test-renderer';

it('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});