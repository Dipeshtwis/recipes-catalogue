import React from 'react';
import renderer from 'react-test-renderer';
import item from '../../components/Item';

it('renders item component correctly', () => {
  const item = renderer.create(<item />).toJSON();
  expect(item).toMatchSnapshot();
});