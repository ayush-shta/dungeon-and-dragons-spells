import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithClient } from 'src/test/test-utils';
import SpellListItem from './spell-list-item';
import { mockSpellListData } from 'src/test/mock-data/mock-spell-items';

const mockSpellListItem = mockSpellListData[0];

const renderSpellListItem = () => renderWithClient(<SpellListItem spell={mockSpellListItem} />);
describe('spell-list-item', () => {
  it('renders spell name', () => {
    renderSpellListItem();

    const spellListItem = screen.getByRole('listitem');
    expect(spellListItem.textContent).toBe(mockSpellListItem.name);
  });
});
