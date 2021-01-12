import React from 'react';
import renderer from 'react-test-renderer';
import Filter from '../../components/Filter';

it('renders filter component correctly', () => {
  const filter = renderer.create(<filter />).toJSON();
  expect(filter).toMatchSnapshot();
});