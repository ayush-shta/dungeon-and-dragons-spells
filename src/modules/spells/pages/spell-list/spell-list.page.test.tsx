import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SpellList from './spell-list.page';
import { renderWithClient } from 'src/test/test-utils';
import { mockSpellListData } from 'src/test/mock-data/mock-spell-items';

const useMockedFetchSpellList = () => {
  return {
    isLoading: false,
    error: false,
    data: mockSpellListData
  };
};

jest.mock('./hooks/use-spell-list-request', () => ({
  useFetchSpellList: useMockedFetchSpellList
}));

const renderSpellList = () => renderWithClient(<SpellList />);

describe('spell-list.page', () => {
  it('spell list renders correctly', () => {
    renderSpellList();

    const spellList = screen.getByRole('list');
    expect(spellList).toBeInTheDocument();
  });

  it('renders total numbers of spell list data', () => {
    renderSpellList();

    const spellListItem = screen.getAllByRole('listitem');
    expect(spellListItem).toHaveLength(mockSpellListData.length);
  });

  it('searches spell from a keyword', async () => {
    const searchKeyword = 'tr';
    const expectedSpellListLength = 4;

    const user = userEvent.setup();

    renderSpellList();

    const searchBox = screen.getByRole('textbox', { name: /search spells/i });
    await user.type(searchBox, searchKeyword);
    expect(searchBox).toHaveValue(searchKeyword);

    const spellListItem = screen.getAllByRole('listitem');
    expect(spellListItem).toHaveLength(expectedSpellListLength);
  });
});
