import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithClient } from 'src/test/test-utils';
import PageTitle from './page-title';

const pageTitleText = 'This is a title';

const renderPageTitle = () => renderWithClient(<PageTitle title={pageTitleText} />);

describe.only('page-title', () => {
  it('renders page title text', () => {
    renderPageTitle();

    const messageElement = screen.getByRole('heading', { name: pageTitleText });
    expect(messageElement).toBeInTheDocument();
  });
});
