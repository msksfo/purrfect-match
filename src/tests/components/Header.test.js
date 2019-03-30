import React from 'react';
import { shallow } from 'enzyme';
import "../setupTests"

import Header from '../../components/Header';


test('shoud render the header correctly', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper).toMatchSnapshot();
})