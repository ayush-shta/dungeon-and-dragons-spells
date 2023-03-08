import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithClient } from 'src/test/test-utils';
import ErrorMessage from './error-message';

const mockMessage = 'There is an error';

const renderErrorMessage = () => renderWithClient(<ErrorMessage message={mockMessage} />);

describe.only('error-message', () => {
  it('renders error message', () => {
    renderErrorMessage();

    const messageElement = screen.getByRole('heading', { name: mockMessage });
    expect(messageElement).toBeInTheDocument();
  });
});
