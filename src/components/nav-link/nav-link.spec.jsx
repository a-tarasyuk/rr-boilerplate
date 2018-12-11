import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from './nav-link';

describe('<NavLink />', () => {
  it('matches its snapshot', () => {
    const component = shallow(<NavLink href={ 'http://localhost' }>Link</NavLink>);
    expect(component).toMatchSnapshot();
  });
});
