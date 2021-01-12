/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import header from '../../components/Header';

it('renders header component correctly', () => {
  const header = renderer.create(<header />).toJSON();
  expect(header).toMatchSnapshot();
});
