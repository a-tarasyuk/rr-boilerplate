import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './home';

describe('<Home />', () => {
  it('matches its snapshot', () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });
});
