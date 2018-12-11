import React from 'react';
import { shallow } from 'enzyme';
import { Root } from './root';

describe('<Root />', () => {
  it('matches its snapshot', () => {
    const component = shallow(<Root />);
    expect(component).toMatchSnapshot();
  });
});
