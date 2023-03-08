import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithClient } from 'src/test/test-utils';
import { mockSpellData } from 'src/test/mock-data/mock-spell-data';
import SpellDetailHeader from './spell-detail-header';

const renderSpellDetailHeader = () => renderWithClient(<SpellDetailHeader spell={mockSpellData} />);

describe('spell-detail-header', () => {
  it('renders spell detail title text', () => {
    renderSpellDetailHeader();
    const spellName = mockSpellData.name;

    const titleText = screen.getByText(spellName);
    expect(titleText).toBeInTheDocument();
  });
  it('renders favorites button correctly', () => {
    renderSpellDetailHeader();

    const favouriteButton = screen.getByRole('button', { name: /add to favorites/i });
    expect(favouriteButton).toBeInTheDocument();
  });
});
