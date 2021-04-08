import React from "react";
import {shallow} from 'enzyme';
import App from '../src/components/wrappers/App'

describe('Testing App Component', () => {
  it('should render corretly', () => {
    const wrapper = shallow(
      <App />
    );

    expect(wrapper).toMatchSnapshot();
  });
});