/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList component', () => {
  it('renders ArticleList', () => {
    const { asFragment } = render(
      <ArticleList
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
