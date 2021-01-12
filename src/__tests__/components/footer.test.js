/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import footer from '../../components/Footer';

it('renders footer component correctly', () => {
  const footer = renderer.create(<footer />).toJSON();
  expect(footer).toMatchSnapshot();
});
