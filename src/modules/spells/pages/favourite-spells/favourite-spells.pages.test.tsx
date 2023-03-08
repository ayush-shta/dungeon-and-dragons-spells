import React from 'react';
import { screen } from '@testing-library/react';
import { PreloadedState } from '@reduxjs/toolkit';

import { renderWithClient } from 'src/test/test-utils';
import FavouriteSpells from './favourite-spells.page';
import { RootState } from 'src/redux/reducers';
import { mockFavouriteSpellsData } from 'src/test/mock-data/mock-favourite-spells';

const mockFavouriteSpells = mockFavouriteSpellsData;

const renderFavouriteSpells = () => {
  const preLoadedState: PreloadedState<RootState> = {
    spellsReducer: {
      favouriteSpells: mockFavouriteSpells
    }
  };

  return renderWithClient(<FavouriteSpells />, preLoadedState);
};

describe('favourite-spells.page', () => {
  it('favourite spell list renders correctly', () => {
    renderFavouriteSpells();

    const spellList = screen.getByRole('list');
    expect(spellList).toBeInTheDocument();
  });

  it('renders all favourite spell list items', () => {
    renderFavouriteSpells();

    const spellList = screen.getAllByRole('listitem');
    expect(spellList).toHaveLength(mockFavouriteSpells.length);
  });

  it('renders page title', () => {
    renderFavouriteSpells();

    const pageHeading = screen.getByRole('heading', { name: /Favourite Spells/ });
    expect(pageHeading).toBeInTheDocument();
  });
});
