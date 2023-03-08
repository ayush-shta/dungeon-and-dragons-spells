import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithClient } from 'src/test/test-utils';
import SpellDetail from './spell-detail.page';
import { mockSpellData } from 'src/test/mock-data/mock-spell-data';

const useMockedFetchSpellDetail = () => {
  return {
    isLoading: false,
    error: false,
    data: mockSpellData
  };
};

jest.mock('./hooks/use-spell-detail-request', () => ({
  useFetchSpellDetail: useMockedFetchSpellDetail
}));

const renderSpellDetailPage = () => renderWithClient(<SpellDetail />);

describe('spell-detail.page', () => {
  it('renders page title as spell name', () => {
    renderSpellDetailPage();

    const pageHeading = screen.getByRole('heading', { name: mockSpellData.name });
    expect(pageHeading).toBeInTheDocument();
  });
});
