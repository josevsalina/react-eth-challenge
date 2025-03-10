import React from 'react';
import { shallow } from 'enzyme';
import data from 'api/data.json';
import Interest from '../../components/Interest';
import * as AppContext from '../../context/AppContext';

describe('<Interest />', () => {
  jest
    .spyOn(AppContext, 'useAppContext')
    .mockImplementation(() => data.data);

  const interest = shallow(<Interest />);

  test('Interest render', () => {
    expect(interest.length).toEqual(1);
  });

  test('Interest title', () => {
    expect(interest.find('.Interest-title').length).toEqual(1);
  });

  test('Interest has 3 items', () => {
    expect(interest.find('.Interest-item').length).toBeGreaterThan(2);
  });

});
