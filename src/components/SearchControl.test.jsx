/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import SearchControl from './SearchControl';

describe('SearchControl component', () => {
  it('renders SearchControl', () => {
    const { asFragment } = render(
      <SearchControl text="dinosaur"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
