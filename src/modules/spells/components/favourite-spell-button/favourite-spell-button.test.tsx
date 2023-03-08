import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PreloadedState } from '@reduxjs/toolkit';

import { renderWithClient } from 'src/test/test-utils';
import { mockSpellData } from 'src/test/mock-data/mock-spell-data';
import FavouriteSpellButton from './favourite-spell-button';
import { RootState } from '../../../../redux/reducers';

const addFavouriteString = 'Add to favorites';
const removeFavouriteString = 'Remove favourite';

const renderFavouriteSpellButton = (preloadedState?: PreloadedState<RootState>) =>
  renderWithClient(<FavouriteSpellButton spellItem={mockSpellData} />, preloadedState);

describe('favourite-spell-button', () => {
  it('renders favorites button correctly', () => {
    renderFavouriteSpellButton();

    const favouriteButton = screen.getByRole('button', { name: /add to favorites/i });
    expect(favouriteButton).toBeInTheDocument();
  });

  it('click add to favorites button behaviour', async () => {
    renderFavouriteSpellButton();

    const user = userEvent.setup();

    const favouriteButton = screen.getByRole('button', { name: addFavouriteString });

    await user.click(favouriteButton);

    const removeFavouriteButton = screen.getByRole('button', { name: removeFavouriteString });
    const favouriteButtonQuery = screen.queryByRole('button', { name: addFavouriteString });

    expect(favouriteButtonQuery).toBeNull();
    expect(removeFavouriteButton).toBeInTheDocument();
  });
  it('click remove to favorites button behaviour', async () => {
    const mockedFavouriteSpell = {
      index: mockSpellData.index,
      name: mockSpellData.name,
      url: mockSpellData.url
    };

    renderFavouriteSpellButton({
      spellsReducer: {
        favouriteSpells: [mockedFavouriteSpell]
      }
    });

    const user = userEvent.setup();

    const removeFavouriteButton = screen.getByRole('button', { name: removeFavouriteString });
    const favouriteButtonQuery = screen.queryByRole('button', { name: addFavouriteString });

    expect(favouriteButtonQuery).toBeNull();
    expect(removeFavouriteButton).toBeInTheDocument();

    await user.click(removeFavouriteButton);

    const removeFavouriteButtonQuery = screen.queryByRole('button', { name: removeFavouriteString });
    const favouriteButton = screen.getByRole('button', { name: addFavouriteString });

    expect(favouriteButton).toBeInTheDocument();
    expect(removeFavouriteButtonQuery).toBeNull();
  });
});
