/* eslint-disable max-len */
import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import fetchArticlesBySearch from '../services/newsSearchApi';

describe('NewsSearch container', () => {
  it('renders NewsSearch and displays search results', async () => {
    render(<NewsSearch />);

    const articleList = screen.getByTestId('articleList');

    const textInput = screen.getByLabelText('text');
    fireEvent.submit(textInput, { target: { value: 'test' } });
    expect(articleList).toEqual(fetchArticlesBySearch(test));
    // Problem: rate limited on API and ran out so this test won't run correctly

    // try to create fake data sets and make sure we get the right set back depending on the search term entered
    
    // expect(articleList).toContain((correct fake results here));
  });
});
