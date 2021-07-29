import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  it('renders Article', () => {
    const { asFragment } = render(<Article />);
    expect(asFragment()).toMatchSnapshot();
  });
});
