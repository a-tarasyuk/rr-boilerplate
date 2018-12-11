import React from 'react';
import { shallow } from 'enzyme';
import { Link } from './link';

describe('<Link />', () => {
  it('matches its snapshot', () => {
    const component = shallow(
      <Link href={ 'http://localhost' } name={ 'Name' }>Link</Link>
    );
    expect(component).toMatchSnapshot();
  });
});
