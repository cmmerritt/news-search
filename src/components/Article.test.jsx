/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  it('renders Article', () => {
    const { asFragment } = render(
      <Article 
        title="Test title"
        description="Test description"
        author="Test author"
        url="testurl.com"
        image="testimg.com"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
