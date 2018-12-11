import React from 'react';
import { shallow } from 'enzyme';
import { Features } from './features';

const features = [{
  name: 'React',
  href: 'http://facebook.github.io/react',
}];

describe('<Features />', () => {
  it('matches its snapshot', () => {
    const component = shallow(
      <Features features={ features } />
    );

    expect(component).toMatchSnapshot();
  });
});
