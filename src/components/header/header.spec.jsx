import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './header';

describe('<Header />', () => {
  it('matches its snapshot', () => {
    const component = shallow(
      <Header>Content</Header>
    );
    expect(component).toMatchSnapshot();
  });
});
