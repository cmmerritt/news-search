/**
 * @jest-environment jsdom
 */

/* eslint-disable max-len */

import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import NewsSearch from './NewsSearch';
// import fetchArticlesBySearch from '../services/newsSearchApi';

describe('NewsSearch container', () => {
  it('renders NewsSearch and displays search results', async () => {
    render(<NewsSearch />);

    // const articleList = screen.findByTestId('articleList');

    const textInput = screen.getByTestId('textInput');
    console.log(textInput);
    fireEvent.change(textInput, { target: { value: 'Golden Girls' } });
    expect(textInput.value).toBe('Golden Girls');
  
  });
});
