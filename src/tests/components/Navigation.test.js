import React from 'react';
import Navigation from '../../components/Navigation';
import { shallow } from 'enzyme';
import '../setupTests';

test('should correctly render the navigation component', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper).toMatchSnapshot();
});
