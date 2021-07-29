import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('NewsSearch container', () => {
  it('renders NewsSearch and displays search results', async () => {
    render(<NewsSearch />);

    const textInput = screen.getByTestId('textInput');
  });
});
