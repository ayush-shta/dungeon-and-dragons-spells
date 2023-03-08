import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithClient } from 'src/test/test-utils';
import NoDataMessage from './no-data-message';

const mockTitle = 'There is no data';

const renderNoDataMessage = () => renderWithClient(<NoDataMessage title={mockTitle} />);

describe.only('no-data-message', () => {
  it('renders no data message', () => {
    renderNoDataMessage();

    const messageElement = screen.getByRole('heading', { name: mockTitle });
    expect(messageElement).toBeInTheDocument();
  });
});
