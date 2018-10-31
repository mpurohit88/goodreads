import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render home page correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();

});

it('should be possible to activate button with Spacebar', () => {
  const component = shallow(<App />);

  component
    .find('WithStyles(Input)#search')
    .simulate('keypress', { keyCode: 13, target: {value: "react"} });
  expect(component).toMatchSnapshot();
  component.unmount();
});
